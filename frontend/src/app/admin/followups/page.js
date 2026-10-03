"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  Send,
  Calendar as CalendarIcon,
  ListFilter,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function FollowupsPage() {
  const { followups, completeFollowup, setActiveDrawer, leads } = useApp();
  const [activeSection, setActiveSection] = useState("All");

  const sections = ["All", "Today", "Tomorrow", "This Week", "Upcoming"];

  const filteredFollowups = followups.filter((f) => {
    if (activeSection === "All") return true;
    return f.timeframe === activeSection;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Follow-ups Manager"
        description="Never let a high-value prospect go cold. Execute scheduled follow-ups and log replies."
        breadcrumbs={["Workspace", "Follow-ups"]}
      />

      {/* Section Filter Pills */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        {sections.map((sec) => {
          const count =
            sec === "All"
              ? followups.filter((f) => f.status === "Pending").length
              : followups.filter((f) => f.timeframe === sec && f.status === "Pending").length;

          return (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeSection === sec
                  ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <span>{sec}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeSection === sec
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Follow-up Cards */}
      {filteredFollowups.length > 0 ? (
        <div className="space-y-3">
          {filteredFollowups.map((item) => {
            const isCompleted = item.status === "Completed";

            return (
              <div
                key={item.id}
                className={`p-4 sm:p-5 rounded-xl border transition-all ${
                  isCompleted
                    ? "bg-slate-50/50 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/40 opacity-60"
                    : "bg-white dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left Info */}
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {item.company}
                      </h4>
                      <Badge variant="blue" size="sm">
                        {item.followupNumber}
                      </Badge>
                      <Badge
                        variant={item.priority === "High" ? "danger" : "default"}
                        size="sm"
                      >
                        {item.priority} Priority
                      </Badge>
                      {isCompleted && (
                        <Badge variant="success" size="sm">
                          Completed
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Prospect: <span className="font-semibold">{item.leadName}</span> • Service: {item.service}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Context: {item.lastAction}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400 pt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.dueDate}</span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        Suggested: {item.suggestedAction}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
                    {!isCompleted && (
                      <Button
                        size="sm"
                        variant="outline"
                        icon={CheckCircle2}
                        onClick={() => completeFollowup(item.id)}
                      >
                        Mark Done
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="primary"
                      icon={Send}
                      onClick={() => {
                        const matched = leads.find((l) => l.name === item.leadName);
                        if (matched) setActiveDrawer({ type: "lead", data: matched });
                      }}
                    >
                      Open Lead
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon={CalendarClock}
          title="All follow-ups cleared!"
          description="Great job staying ahead of your pipeline. No pending outreach items due in this period."
        />
      )}
    </div>
  );
}
