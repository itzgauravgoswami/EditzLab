"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LandingNavbar from "@/components/landing/Navbar";
import LandingFooter from "@/components/landing/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-transparent text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* Header (Identical to Landing Page) */}
      <LandingNavbar />

      {/* Main Content Area — Balanced scale with generous breathing room */}
      <main className="flex-1 relative z-10 flex items-center justify-center pt-40 sm:pt-44 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-7">
          
          {/* Subtle Monospace 404 Accent */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl sm:text-7xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400/40 via-blue-500/20 to-transparent select-none">
              404
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Route Not Located</span>
            </div>
          </div>

          {/* Clean Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-serif leading-tight">
            Page Not Found
          </h1>

          {/* Crisp, Balanced Subtitle */}
          <p className="text-base sm:text-lg text-slate-300/80 max-w-lg mx-auto leading-relaxed font-light">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable in the studio directory.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 backdrop-blur-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400" />
              <span>Go Back</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer (Identical to Landing Page) */}
      <LandingFooter />
    </div>
  );
}
