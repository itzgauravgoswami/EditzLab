"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundVideo({
  fps = 30,
  totalFrames = 300,
  overlayOpacity = "opacity-60",
  className = "",
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isAdmin) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let lastTime = performance.now();
    const frameDuration = 1000 / fps;
    let currentFrameIndex = 1;
    let isDestroyed = false;

    // Cache holding HTMLImageElement objects
    const images = new Array(totalFrames + 1);

    const pad = (num) => String(num).padStart(3, "0");
    const getFrameUrl = (num) => `/Frames/ezgif-frame-${pad(num)}.jpg`;

    // Resize canvas to match display size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-draw current frame immediately after resize
      const img = images[currentFrameIndex];
      if (img && img.complete) {
        drawFrame(img);
      }
    };

    const drawFrame = (img) => {
      if (!ctx || !canvas || !img || !img.complete) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || img.width || 1920;
      const ih = img.naturalHeight || img.height || 1080;

      // Compute "object-fit: cover"
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      ctx.drawImage(img, nx, ny, nw, nh);
    };

    // Preload strategy:
    // 1. Immediately preload the first 25 frames to start playback without delay
    const initialBatch = Math.min(25, totalFrames);
    let loadedCount = 0;

    for (let i = 1; i <= initialBatch; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (isDestroyed) return;
        loadedCount++;
        if (loadedCount === 1) {
          // Draw first frame immediately
          drawFrame(img);
          setIsLoaded(true);
        }
      };
      images[i] = img;
    }

    // 2. Concurrently stream remaining frames in the background
    const loadRemainingFrames = () => {
      for (let i = initialBatch + 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        images[i] = img;
      }
    };

    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadRemainingFrames);
    } else {
      setTimeout(loadRemainingFrames, 100);
    }

    // Main animation loop locked to 30fps
    const loop = (currentTime) => {
      if (isDestroyed) return;

      const elapsed = currentTime - lastTime;

      if (elapsed >= frameDuration) {
        // Advance frame according to elapsed time
        const framesToAdvance = Math.floor(elapsed / frameDuration);
        currentFrameIndex = ((currentFrameIndex - 1 + framesToAdvance) % totalFrames) + 1;
        lastTime = currentTime - (elapsed % frameDuration);

        const img = images[currentFrameIndex];
        if (img && img.complete) {
          drawFrame(img);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [fps, totalFrames, isAdmin]);

  if (isAdmin) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* 30fps 300-Frame Loop Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Light subtle veil to ensure text readability while keeping 300 frames vivid & crisp */}
      <div
        className="absolute inset-0 bg-[#070A11]/25 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,17,0.35)_100%)]" />
    </div>
  );
}
