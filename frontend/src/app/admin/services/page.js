"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  Sparkles,
  Plus,
  Clock,
  Briefcase,
  ToggleLeft,
  ToggleRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const { services, toggleService } = useApp();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Development", "Design", "Video", "Marketing", "Branding"];

  const filteredServices = services.filter(
    (s) => filter === "All" || s.category === filter
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Services & Pricing Catalog"
        description="Configure your client offerings, starting project rates, turnaround timelines, and availability."
        breadcrumbs={["Business", "Services"]}
        actionLabel="Add Service"
        onAction={() => alert("Simulated: Add new service offering form.")}
        actionIcon={Plus}
      />

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              filter === c
                ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className={`p-5 rounded-xl border transition-all shadow-2xs space-y-4 ${
              srv.active
                ? "bg-white dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80"
                : "bg-slate-50/60 dark:bg-slate-900/30 border-slate-200/60 dark:border-slate-800/40 opacity-70"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  {srv.category}
                </span>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {srv.name}
                </h4>
              </div>

              {/* Active Toggle Button */}
              <button
                onClick={() => toggleService(srv.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  srv.active
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
                }`}
                title="Toggle service offering status"
              >
                <span>{srv.active ? "Offering Active" : "Paused"}</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {srv.description}
            </p>

            {/* Price & Turnaround details */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block">Starting Rate</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {srv.priceFormatted}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Est. Turnaround</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {srv.turnaround}
                </span>
              </div>
            </div>

            {/* Active Projects Counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>{srv.activeProjects} active projects</span>
              <span className="text-blue-500 font-medium">Mapped to Campaigns</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
