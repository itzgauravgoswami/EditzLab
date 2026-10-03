"use client";

import React from "react";
import {
  Video,
  Scissors,
  PenTool,
  Calendar,
  Send,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function AutomationSection() {
  const contentPipeline = [
    {
      step: 1,
      badge: "INTAKE",
      title: "Monthly Shoot or Footage Ingestion",
      desc: "We film on-location or ingest your raw footage, podcast audio, and product photo batches.",
      icon: Video,
      color: "border-blue-500 text-blue-400",
    },
    {
      step: 2,
      badge: "EDITING",
      title: "Cinematic Post-Production & Reel Slicing",
      desc: "Our editors master 4K YouTube longforms and slice viral high-retention 9:16 vertical clips.",
      icon: Scissors,
      color: "border-indigo-500 text-indigo-400",
    },
    {
      step: 3,
      badge: "COPY",
      title: "Hook Engineering & Custom Thumbnails",
      desc: "Compelling captions, trending audio curation, search-optimized tags, and click-worthy thumbnails.",
      icon: PenTool,
      color: "border-sky-500 text-sky-400",
    },
    {
      step: 4,
      badge: "APPROVAL",
      title: "Interactive Calendar Preview & One-Click Sign-Off",
      desc: "You review the complete upcoming month of scheduled content with instant frame revisions.",
      icon: Calendar,
      color: "border-emerald-500 text-emerald-400",
    },
    {
      step: 5,
      badge: "DISPATCH",
      title: "Automated Omnichannel Publishing",
      desc: "Every asset is scheduled and published across YouTube, Instagram, TikTok, and LinkedIn.",
      icon: Send,
      color: "border-purple-500 text-purple-400",
    },
    {
      step: 6,
      badge: "INSIGHTS",
      title: "Audience Growth & Retention Telemetry",
      desc: "Monthly performance reports measuring follower conversion, watch time, and viral reach.",
      icon: BarChart3,
      color: "border-blue-400 text-blue-300",
    },
  ];

  return (
    <section id="automation" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Social Media & Content Systems
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-serif sm:whitespace-nowrap text-center">
            Your Content Engine{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              On Autopilot.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-serif font-light max-w-2xl mx-auto text-center">
            Stop stressing over weekly filming and daily posting schedules. We handle your entire social media production and publishing pipeline.
          </p>
        </div>

        {/* Horizontal Visual Pipeline Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentPipeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#070A14]/25 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 hover:border-blue-400/50 hover:bg-[#070A14]/45 hover:-translate-y-2 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_20px_45px_rgba(59,130,246,0.22)] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_12px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] text-blue-400 border border-white/15 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:text-sky-300 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300">
                      Step {item.step} • {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.4)] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
