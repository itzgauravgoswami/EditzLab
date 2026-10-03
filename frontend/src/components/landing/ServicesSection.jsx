"use client";

import React from "react";
import {
  Code2,
  Layout,
  Palette,
  Video,
  PenTool,
  Share2,
  TrendingUp,
  Search,
  Sparkles,
  Camera,
  Compass,
  Briefcase,
} from "lucide-react";

export default function ServicesSection() {
  const serviceCategories = [
    {
      name: "Commercial Photography",
      icon: Camera,
      desc: "Studio product editorial shoots, founder branding portraits, lookbooks, and high-end colour-accurate retouching.",
    },
    {
      name: "Video Editing & Motion",
      icon: Video,
      desc: "Commercial brand films, viral YouTube longform pacing, kinetic typography, and DaVinci Resolve color grading.",
    },
    {
      name: "Websites & Web Apps",
      icon: Code2,
      desc: "Bespoke full-stack applications, high-converting Next.js marketing websites, Jamstack architectures, and custom e-commerce.",
    },
    {
      name: "Social Media Management",
      icon: Share2,
      desc: "Turnkey omnichannel publishing, weekly content batches, short-form viral reels, and active community growth.",
    },
    {
      name: "UI/UX Design Systems",
      icon: Layout,
      desc: "Comprehensive design systems, wireframes, interactive Figma prototypes, and intuitive digital product flows.",
    },
    {
      name: "Brand Identity Design",
      icon: Sparkles,
      desc: "Distinctive visual branding systems, vector logos, typography guidelines, and digital brand styleguides.",
    },
    {
      name: "Content Strategy & Copy",
      icon: PenTool,
      desc: "High-converting landing page copy, founder newsletters, thought leadership articles, and scriptwriting.",
    },
    {
      name: "Graphic & Packaging Design",
      icon: Palette,
      desc: "Key art, commercial banner campaigns, pitch presentations, physical product packaging, and event collateral.",
    },
    {
      name: "Performance Ad Creatives",
      icon: TrendingUp,
      desc: "Direct-response ad variations for Meta, TikTok, and Google. Engineered for high CTR and scalable ROAS.",
    },
    {
      name: "Technical SEO & Speed",
      icon: Search,
      desc: "Core Web Vitals acceleration, structured data, schema markup, and technical search engine visibility audits.",
    },
    {
      name: "Creative Direction",
      icon: Compass,
      desc: "Fractional creative direction, brand narrative positioning, go-to-market visual strategy, and aesthetic audits.",
    },
    {
      name: "Dedicated Creative Retainers",
      icon: Briefcase,
      desc: "Continuous studio asset pipelines, dedicated creative sprints, and priority production queues.",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Tailored For Every Creative Requirement
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-serif sm:whitespace-nowrap text-center">
            Creative Services{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              For High-Growth Brands.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-serif font-light max-w-2xl mx-auto text-center">
            Whether you need a one-off 4K cinematic campaign, a high-converting web redesign, or an ongoing monthly content sprint — we deliver studio-grade assets on demand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {serviceCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-[#070A14]/25 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 hover:border-blue-400/50 hover:bg-[#070A14]/45 hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_18px_40px_rgba(59,130,246,0.2)] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_10px_25px_rgba(0,0,0,0.3)] group flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] transition-all duration-300 mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
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
