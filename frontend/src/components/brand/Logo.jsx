import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  size = "default", // "sm" | "default" | "lg"
  href = "/",
  showWordmark = true,
  className = "",
  variant = "light", // "light" (on dark bg) | "dark" (on light bg)
}) {
  const iconDimensions = {
    sm: { width: 28, height: 28, className: "w-7 h-7" },
    default: { width: 34, height: 34, className: "w-8.5 h-8.5" },
    lg: { width: 44, height: 44, className: "w-11 h-11" },
  };

  const textSizes = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-2xl",
  };

  const dim = iconDimensions[size] || iconDimensions.default;

  const content = (
    <div className={`flex items-center gap-2.5 font-semibold tracking-tight select-none group ${className}`}>
      {/* Official EditzLab Logo Asset from /public */}
      <div className={`relative ${dim.className} shrink-0 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center`}>
        <img
          src="/editzlab-logo.png"
          alt="EditzLab"
          width={dim.width}
          height={dim.height}
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>

      {showWordmark && (
        <span
          className={`${textSizes[size]} font-bold tracking-tight transition-colors ${
            variant === "light"
              ? "text-slate-100 group-hover:text-white"
              : "text-slate-900 group-hover:text-slate-950"
          }`}
        >
          Editz<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Lab</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
