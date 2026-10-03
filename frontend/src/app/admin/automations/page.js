"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import {
  GitBranch,
  Play,
  Pause,
  Plus,
  ArrowDown,
  Clock,
  Mail,
  UserPlus,
  Send,
  CheckCircle2,
  Bell,
  Sparkles,
  Settings2,
} from "lucide-react";

export default function AutomationsPage() {
  const { automations } = useApp();
  const [selectedAuto, setSelectedAuto] = useState(automations[0]);

  const getNodeIcon = (type) => {
    switch (type) {
      case "trigger":
        return <UserPlus className="w-4 h-4 text-blue-500" />;
      case "action":
        return <Send className="w-4 h-4 text-emerald-500" />;
      case "delay":
        return <Clock className="w-4 h-4 text-amber-500" />;
      case "condition":
        return <GitBranch className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  const getNodeBadgeColor = (type) => {
    switch (type) {
      case "trigger":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "action":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "delay":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "condition":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Workflow Automations"
        description="Visual rule engine for cold outreach sequences, automated delays, conditional branches, and auto-pause on reply."
        breadcrumbs={["Workspace", "Automations"]}
        actionLabel="New Flow"
        onAction={() => alert("Simulated: New workflow rule canvas opened.")}
        actionIcon={Plus}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Saved Automations List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
            Active Workflows ({automations.length})
          </h3>

          {automations.map((auto) => (
            <div
              key={auto.id}
              onClick={() => setSelectedAuto(auto)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedAuto.id === auto.id
                  ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-500/50 ring-1 ring-blue-500/30"
                  : "bg-white dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {auto.name}
                </h4>
                <Badge variant={auto.status === "Active" ? "success" : "default"} size="sm" dot>
                  {auto.status}
                </Badge>
              </div>

              <p className="text-xs text-slate-500 mb-3">
                Trigger: {auto.trigger}
              </p>

              <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-center text-[11px]">
                <div>
                  <span className="text-slate-400 block">Triggered</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{auto.stats.triggered}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">In Progress</span>
                  <span className="font-semibold text-blue-500">{auto.stats.inProgress}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Replies</span>
                  <span className="font-semibold text-emerald-500">{auto.stats.replied}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Visual Node Workflow Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-6 shadow-2xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {selectedAuto.name}
                </h3>
                <Badge variant="success" size="sm" dot>Active Engine</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Interactive visual node execution diagram
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" icon={Settings2}>
                Configure
              </Button>
            </div>
          </div>

          {/* Node sequence rendering */}
          <div className="py-8 flex flex-col items-center">
            {selectedAuto.nodes.map((node, index) => (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <div className="w-full max-w-md p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                      {getNodeIcon(node.type)}
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getNodeBadgeColor(node.type)} inline-block mb-1`}>
                        {node.title}
                      </span>
                      <h5 className="text-xs font-semibold text-slate-900 dark:text-white">
                        {node.desc}
                      </h5>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 group-hover:text-blue-500 font-medium">
                    Step {index + 1}
                  </span>
                </div>

                {/* Connecting Line and Down Arrow */}
                {index < selectedAuto.nodes.length - 1 && (
                  <div className="flex flex-col items-center my-1 text-slate-400 dark:text-slate-600">
                    <div className="w-0.5 h-6 bg-slate-200 dark:bg-slate-800" />
                    <ArrowDown className="w-3.5 h-3.5 -mt-1 text-slate-400" />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* End terminal indicator */}
            <div className="mt-4 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 font-medium border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Pipeline exits when lead responds or reaches completion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
