"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  Send,
  Plus,
  Play,
  Pause,
  BarChart2,
  Mail,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function CampaignsPage() {
  const { campaigns, setActiveModal } = useApp();
  const [filter, setFilter] = useState("All");

  const filteredCampaigns = campaigns.filter(
    (c) => filter === "All" || c.status === filter
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Outreach Campaigns"
        description="Automated multi-step cold sequences tailored to your freelance services."
        breadcrumbs={["Workspace", "Campaigns"]}
        actionLabel="Create Campaign"
        onAction={() => setActiveModal("create_campaign")}
        actionIcon={Plus}
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        {["All", "Active", "Paused"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === tab
                ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Campaigns Grid */}
      {filteredCampaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              className="p-5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {camp.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {camp.service}
                  </p>
                </div>
                <Badge variant={camp.status === "Active" ? "success" : "default"} dot size="sm">
                  {camp.status}
                </Badge>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                {camp.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-center">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Leads
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {camp.leadsCount}
                  </span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Delivered
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {camp.deliveredRate}%
                  </span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Opened
                  </span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {camp.openedRate}%
                  </span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Replies
                  </span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {camp.repliesCount}
                  </span>
                </div>
              </div>

              {/* Progress & Steps Footer */}
              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Activity: {camp.lastActivity}</span>
                </span>
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  {camp.sequenceSteps} sequence steps
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Send}
          title="No campaigns yet"
          description="Create your first campaign to start organizing your automated outreach sequences."
          actionLabel="Create Campaign"
          onAction={() => setActiveModal("create_campaign")}
        />
      )}
    </div>
  );
}
