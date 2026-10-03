"use client";

import React from "react";
import {
  Camera,
  Video,
  Code2,
  Share2,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function LandingFeatures() {
  const capabilities = [
    {
      icon: Camera,
      title: "Commercial Photography & Retouching",
      badge: "Visuals",
      image: "/features/photography.jpg",
      description:
        "High-definition editorial shoots, product packaging showcases, founder portraiture, and high-end colour-calibrated retouching.",
      bullets: [
        "Ultra high-res studio & location shoots",
        "Commercial colour grading & skin retouching",
        "Full broadcast & commercial usage licenses",
      ],
    },
    {
      icon: Video,
      title: "Cinematic Video Production & Post",
      badge: "Film & Reels",
      image: "/features/video.jpg",
      description:
        "Commercial reels, YouTube longform pacing, kinetic typography, dynamic sound design, and color grading that grabs viewer attention.",
      bullets: [
        "Retention-engineered YouTube & reel pacing",
        "DaVinci Resolve studio color grading",
        "Licensed sound effects & master music beds",
      ],
    },
    {
      icon: Code2,
      title: "Websites & Modern Web Applications",
      badge: "Development",
      image: "/features/web.jpg",
      description:
        "Bespoke Next.js marketing sites, interactive Jamstack web apps, and headless e-commerce built to convert visitors into loyal clients.",
      bullets: [
        "Figma-to-Code pixel perfection",
        "Blazing fast 100/100 Core Web Vitals",
        "Custom animations & CMS integrations",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Management & Growth",
      badge: "Omnichannel",
      image: "/features/social.jpg",
      description:
        "End-to-end social media publishing systems. We create, schedule, and optimize content across Instagram, YouTube, TikTok, and LinkedIn.",
      bullets: [
        "Weekly planned content batches",
        "High-converting short-form viral cuts",
        "Monthly audience growth & retention analytics",
      ],
    },
    {
      icon: Sparkles,
      title: "Brand Identity & Visual Systems",
      badge: "Branding",
      image: "/features/branding.jpg",
      description:
        "Memorable visual identities, vector logos, comprehensive typography systems, graphic assets, and digital brand styleguides.",
      bullets: [
        "Comprehensive brand stylebook",
        "Vector logos & scalable SVG packages",
        "Interactive digital component systems",
      ],
    },
    {
      icon: TrendingUp,
      title: "Creative Direction & Performance Ads",
      badge: "Growth",
      image: "/features/ads.jpg",
      description:
        "Multi-hook creative ad assets for Meta, Google, and TikTok. We design and test high-performing visuals that scale brand revenue.",
      bullets: [
        "Multi-hook creative variations",
        "Direct-response visual storytelling",
        "Continuous ad creative iteration",
      ],
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Tailored For Modern Brands & High-Growth Creators
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-serif sm:whitespace-nowrap text-center">
            Creative Production{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              Under One Roof.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-serif font-light max-w-2xl mx-auto text-center">
            From viral video edits and bespoke web development to commercial shoots and omnichannel social management — we deliver studio-grade creative execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 sm:p-6 rounded-3xl bg-[#070A14]/25 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 hover:border-blue-400/50 hover:bg-[#070A14]/45 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(59,130,246,0.22),inset_0_1px_0_0_rgba(255,255,255,0.25)] flex flex-col justify-between overflow-hidden cursor-default"
              >
                <div>
                  {/* Feature Image Banner with Hover Zoom & Glass Overlays */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/15 bg-black/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.4)]">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Dark gradient fade for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A14]/90 via-[#070A14]/25 to-transparent pointer-events-none" />

                    {/* Floating Corner Badges & Glassmorphic Icon */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="w-9 h-9 rounded-xl bg-[#070A14]/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-blue-400 group-hover:text-sky-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                        <Icon className="w-4 h-4 transition-transform duration-300" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#070A14]/80 text-blue-300 border border-white/20 group-hover:border-blue-400/40 group-hover:text-sky-200 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-all duration-300">
                        {cap.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-5 font-light">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300 transition-transform duration-200 hover:translate-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
