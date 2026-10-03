"use client";

import React from "react";
import {
  FileText,
  Compass,
  Palette,
  Rocket,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

export default function LandingWorkflow() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Brief",
      icon: FileText,
      description:
        "We align on your project goals, aesthetic voice, and target audience, locking in fixed milestone deadlines.",
    },
    {
      num: "02",
      title: "Strategy & Storyboards",
      icon: Compass,
      description:
        "Visual moodboards, script treatments, and interactive wireframes so you approve the vision before production.",
    },
    {
      num: "03",
      title: "Studio Production",
      icon: Palette,
      description:
        "Senior specialists execute 4K cinema filming, bespoke Next.js coding, DaVinci color grading, and dynamic motion.",
    },
    {
      num: "04",
      title: "Review & Master Hand-Off",
      icon: Rocket,
      description:
        "Timestamped frame feedback, rapid revisions, 4K ProRes master files, and 100% intellectual property transfer.",
    },
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Centered, Title Cased & Concise) */}
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            A Seamless Collaborative Experience
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-serif sm:whitespace-nowrap text-center">
            Creative Process{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              From Concept To Delivery.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-serif font-light max-w-2xl mx-auto text-center">
            No communication black holes, no missed deadlines. A simple, 4-step production flow from initial briefing to final delivery.
          </p>
        </div>

        {/* Horizontal Timeline Stage Tracker with 4 Dots on the Same Line */}
        <div className="relative max-w-5xl mx-auto mb-12 px-4 sm:px-8">
          {/* Glowing connecting horizontal line */}
          <div className="absolute top-[18px] inset-x-8 sm:inset-x-14 h-[2px] bg-gradient-to-r from-blue-500/20 via-sky-400/80 to-blue-500/20 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

          {/* 4 Dots on the same line */}
          <div className="relative flex items-center justify-between z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                {/* Glowing Dot Ring */}
                <div className="w-9 h-9 rounded-full bg-[#070A14] border-2 border-blue-400 flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.6)] backdrop-blur-xl group-hover:scale-125 group-hover:border-sky-300 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.9)] transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.9)] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Stage Label */}
                <span className="mt-2.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-blue-300 group-hover:text-sky-300 transition-colors duration-200">
                  Stage {step.num}
                </span>
                <span className="text-[10px] text-slate-400 font-light hidden sm:inline group-hover:text-slate-200 transition-colors duration-200">
                  {step.title.split("&")[0].trim()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clean 4-Step Connected Process Flow with Arrows */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col">
                  {/* Step Card with Glassmorphism and Interactive Lift */}
                  <div className="group h-full p-6 sm:p-7 rounded-3xl bg-[#070A14]/25 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 hover:border-blue-400/50 hover:bg-[#070A14]/45 hover:-translate-y-2 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_20px_45px_rgba(59,130,246,0.22)] transition-all duration-300 flex flex-col justify-between cursor-default">
                    <div>
                      {/* Top Row: Icon + Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center justify-center text-blue-400 group-hover:text-sky-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                        </div>

                        <span className="text-sm font-mono font-bold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 group-hover:border-blue-400/50 group-hover:bg-blue-500/20 group-hover:text-sky-300 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                          {step.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Status Indicator */}
                    <div className="pt-5 mt-6 border-t border-white/10 group-hover:border-white/20 flex items-center justify-between text-xs text-slate-400 transition-colors duration-300">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-300 font-light group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 group-hover:text-sky-300 group-hover:scale-110 transition-transform duration-300" />
                        <span>Step {idx + 1} of 4</span>
                      </span>
                      <span className="text-[11px] text-blue-400 font-medium group-hover:text-sky-300 transition-colors duration-300">
                        Phase {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Connecting Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#070A14] border border-white/20 items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.4)] pointer-events-none transition-transform duration-300 hover:scale-110">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  {/* Mobile Connecting Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div className="flex lg:hidden justify-center my-2 text-blue-400/70">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
