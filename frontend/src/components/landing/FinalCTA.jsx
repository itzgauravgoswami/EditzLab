"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageSquare,
  FileCheck,
  Lock,
} from "lucide-react";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    budget: "₹25,000 - ₹75,000",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Web Development",
    "UI/UX Design",
    "Video Editing",
    "Brand Identity",
    "Growth & SEO",
  ];

  const budgets = [
    "< ₹25,000",
    "₹25,000 - ₹75,000",
    "₹75,000 - ₹2,00,000",
    "₹2,00,000+",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="request-service" className="py-24 sm:py-32 relative overflow-hidden bg-transparent">
      {/* Subtle ambient depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Service Inquiry & Proposals</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight font-serif sm:whitespace-nowrap text-center">
            Start Your Next Project{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              With EditzLab.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-serif font-light max-w-2xl mx-auto text-center">
            Tell us about your creative vision. We review briefs rapidly and return with a scoped timeline and fixed estimate within 24 hours.
          </p>
        </div>

        {/* Master Highly Transparent Glass Card Container */}
        <div className="rounded-3xl bg-[#070A14]/20 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Studio Assurances & Perks (5 cols) - Highly Transparent */}
            <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-white/[0.02] backdrop-blur-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Why Partner With Our Studio?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 mt-2 leading-relaxed">
                    We work with venture-backed startups, high-volume creators, and ambitious enterprises worldwide.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Perk 1 */}
                  <div className="group/perk p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-blue-400/35 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-start gap-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-400 group-hover/perk:scale-115 group-hover/perk:rotate-6 group-hover/perk:shadow-[0_0_18px_rgba(59,130,246,0.5)] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all duration-300">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/perk:text-blue-300 transition-colors duration-200">
                        24-Hour Scoping & Quote
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5 leading-relaxed group-hover/perk:text-slate-200 transition-colors duration-200">
                        No endless back-and-forth. You receive transparent milestones and exact budgets.
                      </p>
                    </div>
                  </div>

                  {/* Perk 2 */}
                  <div className="group/perk p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-emerald-400/35 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-start gap-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 group-hover/perk:scale-115 group-hover/perk:rotate-6 group-hover/perk:shadow-[0_0_18px_rgba(16,185,129,0.5)] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_14px_rgba(16,185,129,0.3)] transition-all duration-300">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/perk:text-emerald-300 transition-colors duration-200">
                        Direct Senior Production
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5 leading-relaxed group-hover/perk:text-slate-200 transition-colors duration-200">
                        No junior hand-offs or account managers. Work directly with top craft specialists.
                      </p>
                    </div>
                  </div>

                  {/* Perk 3 */}
                  <div className="group/perk p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-purple-400/35 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-start gap-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-400 group-hover/perk:scale-115 group-hover/perk:rotate-6 group-hover/perk:shadow-[0_0_18px_rgba(168,85,247,0.5)] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_14px_rgba(168,85,247,0.3)] transition-all duration-300">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/perk:text-purple-300 transition-colors duration-200">
                        Strict NDA & Full IP Rights
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5 leading-relaxed group-hover/perk:text-slate-200 transition-colors duration-200">
                        Complete confidentiality with full transfer of source files and intellectual property.
                      </p>
                    </div>
                  </div>

                  {/* Perk 4 */}
                  <div className="group/perk p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-sky-400/35 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-start gap-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 group-hover/perk:scale-115 group-hover/perk:rotate-6 group-hover/perk:shadow-[0_0_18px_rgba(56,189,248,0.5)] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_14px_rgba(56,189,248,0.3)] transition-all duration-300">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/perk:text-sky-300 transition-colors duration-200">
                        Milestone Guarantees
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5 leading-relaxed group-hover/perk:text-slate-200 transition-colors duration-200">
                        Transparent deliverables with scheduled revisions and client sprint sign-offs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Email Callout */}
              <div className="mt-8 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.04] backdrop-blur-md transition-all duration-300">
                <p className="text-xs text-slate-400">Prefer direct email or sharing an RFP?</p>
                <a
                  href="mailto:hello@editzlab.com"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-sky-300 transition-colors duration-200 mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">hello@editzlab.com</span>
                </a>
              </div>
            </div>

            {/* Right Column: The Service Request Form (7 cols) - Transparent Glass */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-transparent">
              {submitted ? (
                <div className="py-12 px-6 text-center space-y-5 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.35)] backdrop-blur-xl animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Service Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our team will review your project brief for{" "}
                    <span className="text-blue-400 font-semibold">{formData.service}</span> and reach out at{" "}
                    <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "Web Development",
                          budget: "₹25,000 - ₹75,000",
                          description: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] hover:scale-105 active:scale-95 border border-white/15 text-xs font-semibold text-slate-200 transition-all cursor-pointer backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full h-11 px-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/30 focus:border-blue-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/25 text-white placeholder-slate-400 text-xs sm:text-sm transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                        Work Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full h-11 px-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/30 focus:border-blue-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/25 text-white placeholder-slate-400 text-xs sm:text-sm transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                      />
                    </div>
                  </div>

                  {/* Company / Brand Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                      Company or Brand Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Studio / YouTube Channel"
                      className="w-full h-11 px-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/30 focus:border-blue-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/25 text-white placeholder-slate-400 text-xs sm:text-sm transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                    />
                  </div>

                  {/* Service Selection Chips */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                      Select Primary Service
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: item })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
                            formData.service === item
                              ? "bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white shadow-[0_0_18px_rgba(59,130,246,0.45),inset_0_1px_0_0_rgba(255,255,255,0.3)] font-semibold"
                              : "bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.08] text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                      Estimated Project Budget (INR)
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`h-11 px-3 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap text-center hover:scale-[1.02] active:scale-95 ${
                            formData.budget === b
                              ? "bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white shadow-[0_0_16px_rgba(59,130,246,0.45),inset_0_1px_0_0_rgba(255,255,255,0.3)] font-semibold"
                              : "bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.08] text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 tracking-wide block">
                      Project Goals & Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what you want to achieve, any deadline, or reference links..."
                      className="w-full p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/30 focus:border-blue-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/25 text-white placeholder-slate-400 text-xs sm:text-sm transition-all duration-200 resize-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-3.5 px-6 rounded-full bg-blue-600/90 hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.98] backdrop-blur-md border border-blue-400/40 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_38px_rgba(59,130,246,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending your request...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>We respect your privacy. No spam. Direct response from our creative directors.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
