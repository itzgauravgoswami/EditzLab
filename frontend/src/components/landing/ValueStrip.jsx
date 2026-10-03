"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ValueStrip() {
  const steps = [
    { label: "Leads", desc: "Pipeline capture" },
    { label: "Outreach", desc: "Automated cold sequences" },
    { label: "Follow-ups", desc: "Precision reminder triggers" },
    { label: "Clients", desc: "Structured CRM & Retainers" },
    { label: "Projects", desc: "Milestones & Deliverables" },
    { label: "Payments", desc: "Invoices & Revenue" },
  ];

  return (
    <section className="border-y border-slate-800/50 bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-wider uppercase text-slate-400 mb-6">
          Everything your creative business needs to run end-to-end
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 text-center hover:border-slate-700 transition-colors group"
            >
              <span className="text-[11px] font-mono text-slate-400 block mb-1 group-hover:text-blue-400 transition-colors">
                0{idx + 1}
              </span>
              <h4 className="text-sm font-bold text-white tracking-tight">
                {step.label}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
