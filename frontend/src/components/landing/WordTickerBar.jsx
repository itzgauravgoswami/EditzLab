"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function WordTickerBar({
  words = [],
  direction = "left", // "left" | "right"
  speed = "30s",
  accentColor = "blue", // "blue" | "purple" | "indigo" | "emerald" | "amber"
  className = "",
}) {
  // Ensure we duplicate the array so the ticker has a seamless infinite loop
  const displayWords = [...words, ...words];

  const dotGlows = {
    blue: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]",
    sky: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    purple: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]",
    indigo: "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]",
    emerald: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
  };

  const accentPills = {
    blue: "text-blue-400 group-hover:text-white",
    sky: "text-sky-400 group-hover:text-white",
    cyan: "text-cyan-300 group-hover:text-white",
    purple: "text-purple-400 group-hover:text-white",
    indigo: "text-indigo-400 group-hover:text-white",
    emerald: "text-emerald-400 group-hover:text-white",
  };

  const animClass =
    direction === "left" ? "animate-ticker-left" : "animate-ticker-right";

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#070A14]/20 backdrop-blur-md py-3.5 select-none ${className}`}
    >
      {/* Top Blue Color Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 via-sky-400 to-transparent z-20 pointer-events-none shadow-[0_0_8px_rgba(56,189,248,0.45)]" />

      {/* Bottom Blue Color Gradient Border */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 via-sky-400 to-transparent z-20 pointer-events-none shadow-[0_0_8px_rgba(56,189,248,0.45)]" />

      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070A11]/60 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070A11]/60 to-transparent z-10" />

      {/* Ticker conveyor track */}
      <div
        className={`flex w-max items-center gap-6 whitespace-nowrap ${animClass}`}
        style={{ animationDuration: speed }}
      >
        {displayWords.map((word, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-6 cursor-default transition-all"
          >
            <span
              className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-300 transition-all duration-200 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] ${
                idx % 4 === 0 ? accentPills[accentColor] : ""
              }`}
            >
              {word}
            </span>

            {/* Glowing Separator Symbol */}
            <span className="flex items-center justify-center">
              {idx % 3 === 0 ? (
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform duration-200 group-hover:scale-125 ${
                    dotGlows[accentColor] || "bg-blue-500"
                  }`}
                />
              ) : (
                <Sparkles className="w-2.5 h-2.5 text-slate-600 transition-all duration-200 group-hover:text-blue-400 group-hover:scale-125" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
