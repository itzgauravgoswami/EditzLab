"use client";

import React from "react";
import { Sparkles, ArrowRight, Play, Star } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Background ambient lighting & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none -z-10" />

      {/* Ambient center radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-indigo-600/15 blur-3xl pointer-events-none rounded-full -z-10" />

      {/* Floating bokeh particle lights (matching reference screenshot atmosphere) */}
      <div className="absolute top-20 right-[22%] w-2.5 h-2.5 rounded-full bg-sky-400/90 blur-[0.5px] shadow-[0_0_12px_rgba(56,189,248,0.9)] animate-pulse pointer-events-none" />
      <div className="absolute top-36 right-[14%] w-6 h-6 rounded-full bg-blue-400/40 blur-[4px] shadow-[0_0_24px_rgba(96,165,250,0.8)] pointer-events-none" />
      <div className="absolute bottom-28 left-[12%] w-2.5 h-2.5 rounded-full bg-cyan-400/80 blur-[0.5px] shadow-[0_0_10px_rgba(34,211,238,0.8)] pointer-events-none" />
      <div className="absolute bottom-16 right-[38%] w-1.5 h-1.5 rounded-full bg-sky-300/80 blur-[0.5px] shadow-[0_0_8px_rgba(125,211,252,0.9)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Editorial Serif Headline (Two-line layout matching reference) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] font-serif">
          We Craft{" "}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]">
            Digital Experiences
          </span>
          <br className="hidden sm:inline" /> That Drive Brand Growth.
        </h1>

        {/* Editorial Subtitle */}
        <p className="mt-7 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-serif font-light tracking-wide">
          EditzLab is an elite digital creative studio. We build high-converting web apps, edit 4K cinematic videos, create viral YouTube graphics, and scale brand identities.
        </p>

        {/* CTA Buttons (Side-by-side on mobile and desktop) */}
        <div className="mt-10 flex flex-row items-center justify-center gap-2.5 sm:gap-4">
          <a href="#request-service">
            <button className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-[#070A12] border border-blue-500/60 text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] hover:border-blue-400 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </button>
          </a>

          <a href="#services">
            <button className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-[#070A14]/30 hover:bg-[#070A14]/60 border border-white/15 hover:border-blue-400/40 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] whitespace-nowrap">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-blue-400 group-hover:scale-115 transition-transform duration-300 shrink-0" />
              <span>Explore Showcase</span>
            </button>
          </a>
        </div>

        {/* Rating and Social Proof Row in Glassmorphic Pill */}
        <div className="mt-11 flex justify-center px-3">
          <div className="group/pill inline-flex items-center justify-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#070A14]/25 hover:bg-[#070A14]/45 backdrop-blur-2xl border border-white/12 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] text-[11px] sm:text-xs cursor-default flex-nowrap whitespace-nowrap max-w-full">
            {/* Overlapping Avatar Badges with Micro-expand */}
            <div className="flex items-center -space-x-1.5 sm:-space-x-2 shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-[#070A11] flex items-center justify-center text-[7px] sm:text-[8px] font-black text-white shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20">
                EL
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 border-2 border-[#070A11] flex items-center justify-center text-[7px] sm:text-[8px] font-black text-white shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20">
                YT
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-[#070A11] flex items-center justify-center text-[7px] sm:text-[8px] font-black text-[#070A11] shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20">
                UX
              </div>
            </div>

            {/* 5 Stars */}
            <div className="flex items-center gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-sky-400 text-sky-400 transition-transform duration-200 hover:scale-125" />
              ))}
            </div>

            {/* Rating Score & Client Count */}
            <span className="font-bold text-white shrink-0">
              4.9/5<span className="hidden sm:inline"> Rating</span>
            </span>
            <span className="text-white/20 shrink-0">•</span>
            <span className="text-slate-300 shrink-0">
              <span className="hidden sm:inline">Trusted by </span>50+ Global Brands
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
