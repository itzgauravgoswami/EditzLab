"use client";

import React from "react";
import Logo from "@/components/brand/Logo";

export default function LandingFooter() {
  return (
    <footer className="relative z-20 border-t border-slate-800 bg-[#070A11] py-14 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Logo size="default" href="/" variant="light" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              EditzLab is a premier creative production studio. We deliver cinematic video editing, commercial photography, bespoke web development, and turnkey social media management.
            </p>
            <div className="flex items-center gap-2.5 text-slate-400 pt-1">
              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(59,130,246,0.4)] flex items-center justify-center transition-all duration-200"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(59,130,246,0.4)] flex items-center justify-center transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(59,130,246,0.4)] flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Creative Offerings
            </h5>
            <ul className="space-y-2">
              <li><a href="#services" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Video Production</a></li>
              <li><a href="#services" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Commercial Photoshoots</a></li>
              <li><a href="#services" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Web Development</a></li>
              <li><a href="#services" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Social Media Management</a></li>
              <li><a href="#request-service" className="inline-block text-blue-400 hover:text-sky-300 hover:translate-x-1.5 transition-all duration-200 font-medium">Request a Proposal →</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Company
            </h5>
            <ul className="space-y-2">
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">About EditzLab</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Manifesto</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Careers</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Contact Founder</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-3">
            <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Resources
            </h5>
            <ul className="space-y-2">
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Documentation</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Email Playbooks</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Privacy Policy</a></li>
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect / Get in Touch */}
          <div className="space-y-3">
            <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Get in Touch
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@editzlab.studio"
                  className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  contact@editzlab.studio
                </a>
              </li>
              <li>
                <a
                  href="#request-service"
                  className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  Book Discovery Call
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  Production Process
                </a>
              </li>
              <li className="pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Projects
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} EditzLab. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for ambitious brands and high-growth creators.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
