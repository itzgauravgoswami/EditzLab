"use client";

import React from "react";
import LandingNavbar from "@/components/landing/Navbar";
import LandingHero from "@/components/landing/Hero";
import LandingFeatures from "@/components/landing/Features";
import LandingWorkflow from "@/components/landing/Workflow";
import ServicesSection from "@/components/landing/ServicesSection";
import AutomationSection from "@/components/landing/AutomationSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/Footer";
import WordTickerBar from "@/components/landing/WordTickerBar";

// 6 distinct curated sets of at least 22 unique words each
const tickerSet1 = [
  "innovate",
  "create",
  "develop",
  "imagine",
  "architect",
  "engineer",
  "build",
  "craft",
  "design",
  "prototype",
  "iterate",
  "launch",
  "revolutionize",
  "synthesize",
  "pioneer",
  "conceptualize",
  "manifest",
  "transform",
  "originate",
  "compose",
  "invent",
  "refine",
];

const tickerSet2 = [
  "strategize",
  "scale",
  "accelerate",
  "expand",
  "optimize",
  "elevate",
  "monetize",
  "streamline",
  "capitalize",
  "dominate",
  "thrive",
  "multiply",
  "outperform",
  "catalyze",
  "prosper",
  "advance",
  "boost",
  "maximize",
  "yield",
  "empower",
  "compound",
  "grow",
];

const tickerSet3 = [
  "execute",
  "deliver",
  "orchestrate",
  "perfect",
  "coordinate",
  "synchronize",
  "manage",
  "deploy",
  "operationalize",
  "standardize",
  "calibrate",
  "polish",
  "structure",
  "formalize",
  "dispatch",
  "navigate",
  "oversee",
  "regulate",
  "actualize",
  "systematize",
  "govern",
  "achieve",
];

const tickerSet4 = [
  "collaborate",
  "connect",
  "integrate",
  "harmonize",
  "converge",
  "align",
  "unify",
  "centralize",
  "bridge",
  "interlink",
  "network",
  "interface",
  "engage",
  "interact",
  "partner",
  "cooperate",
  "cohere",
  "blend",
  "consolidate",
  "fuse",
  "link",
  "unite",
];

const tickerSet5 = [
  "master",
  "produce",
  "edit",
  "render",
  "direct",
  "curate",
  "animate",
  "visualize",
  "code",
  "brand",
  "publish",
  "capture",
  "broadcast",
  "stylize",
  "grade",
  "compose",
  "refine",
  "shape",
  "articulate",
  "polish",
  "author",
  "illustrate",
];

const tickerSet6 = [
  "automate",
  "dispatch",
  "trigger",
  "schedule",
  "track",
  "streamline",
  "accelerate",
  "dynamize",
  "expedite",
  "resolve",
  "predict",
  "empower",
  "simplify",
  "delegate",
  "mechanize",
  "supercharge",
  "liberate",
  "modernize",
  "activate",
  "evolve",
  "futureproof",
  "lead",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* Sticky Marketing Navbar */}
      <LandingNavbar />

      {/* Main Landing Flow with Alternating Rotating Ticker Bars */}
      <main className="flex-1 relative z-10">
        {/* Section 1: Hero */}
        <LandingHero />

        {/* Ticker Bar 1: Innovation & Creation */}
        <WordTickerBar
          words={tickerSet1}
          direction="left"
          speed="36s"
          accentColor="blue"
        />

        {/* Section 2: Features */}
        <LandingFeatures />

        {/* Ticker Bar 2: Strategy & Growth */}
        <WordTickerBar
          words={tickerSet2}
          direction="right"
          speed="34s"
          accentColor="purple"
        />

        {/* Section 3: Workflow */}
        <LandingWorkflow />

        {/* Ticker Bar 3: Execution & Operations */}
        <WordTickerBar
          words={tickerSet3}
          direction="left"
          speed="38s"
          accentColor="indigo"
        />

        {/* Section 4: Services */}
        <ServicesSection />

        {/* Ticker Bar 4: Synergy & Connectivity */}
        <WordTickerBar
          words={tickerSet4}
          direction="right"
          speed="35s"
          accentColor="blue"
        />

        {/* Section 5: Automation */}
        <AutomationSection />

        {/* Ticker Bar 5: Craft & Production */}
        <WordTickerBar
          words={tickerSet5}
          direction="left"
          speed="37s"
          accentColor="sky"
        />

        {/* Section 6: Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
