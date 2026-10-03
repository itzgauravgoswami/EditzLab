"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Drawer } from "@/components/common/Modal";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import {
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  Send,
  UserCheck,
  Briefcase,
  Layers,
  CreditCard,
  DollarSign,
  Tag,
} from "lucide-react";

export default function GlobalDrawers() {
  const {
    activeDrawer,
    setActiveDrawer,
    updateLeadStatus,
    convertLeadToClient,
    markInvoicePaid,
  } = useApp();

  if (!activeDrawer) return null;

  const { type, data } = activeDrawer;

  return (
    <>
      {/* 1. LEAD DETAIL DRAWER */}
      {type === "lead" && (
        <Drawer
          isOpen={true}
          onClose={() => setActiveDrawer(null)}
          title={data.name}
          subtitle={`${data.title} at ${data.company}`}
          width="max-w-lg"
        >
          <div className="space-y-6">
            {/* Top Status & Value Header */}
            <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div>
                <span className="text-[11px] font-medium text-slate-400 block mb-0.5">
                  Pipeline Status
                </span>
                <Badge
                  variant={
                    data.status === "Won"
                      ? "success"
                      : data.status === "Proposal"
                      ? "purple"
                      : data.status === "Replied"
                      ? "blue"
                      : data.status === "Interested"
                      ? "warning"
                      : "default"
                  }
                  dot
                >
                  {data.status}
                </Badge>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-medium text-slate-400 block mb-0.5">
                  Deal Value
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  ₹{Number(data.value).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Quick Action: Convert to Client */}
            {data.status !== "Won" ? (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <p className="font-semibold text-blue-900 dark:text-blue-300">
                    Ready to close deal?
                  </p>
                  <p className="text-blue-700/80 dark:text-blue-400 text-[11px]">
                    Convert this lead to an active client and create their first project.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="primary"
                  icon={UserCheck}
                  onClick={() => {
                    convertLeadToClient(data);
                    setActiveDrawer(null);
                  }}
                >
                  Convert to Client
                </Button>
              </div>
            ) : (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Deal Won! Converted to Active Client.</span>
              </div>
            )}

            {/* Contact Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Contact Information
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href={`mailto:${data.email}`} className="hover:underline text-blue-500">
                    {data.email}
                  </a>
                </div>
                {data.phone && (
                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{data.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span>{data.company}</span>
                </div>
              </div>
            </div>

            {/* Service & Campaign */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Engagement Details
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-400 block text-[11px] mb-1">Service Required</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{data.service}</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-400 block text-[11px] mb-1">Outreach Campaign</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{data.campaign}</span>
                </div>
              </div>
            </div>

            {/* Status Change Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Change Pipeline Stage
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {["New", "Contacted", "Opened", "Replied", "Interested", "Proposal", "Won", "Lost"].map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => updateLeadStatus(data.id, st)}
                      className={`text-xs py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                        data.status === st
                          ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                          : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Context & Notes
              </h4>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {data.notes || "No additional notes documented for this lead."}
              </div>
            </div>
          </div>
        </Drawer>
      )}

      {/* 2. CONTACT DETAIL DRAWER */}
      {type === "contact" && (
        <Drawer
          isOpen={true}
          onClose={() => setActiveDrawer(null)}
          title={data.name}
          subtitle={`${data.role || "Lead"} at ${data.company}`}
          width="max-w-md"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-base shadow-sm">
                {data.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{data.name}</h4>
                <p className="text-xs text-slate-500">{data.company}</p>
                <div className="flex gap-1.5 mt-1.5">
                  {data.tags?.map((t) => (
                    <Badge key={t} size="sm" variant="neutral">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-800/60">
                <span className="text-slate-400">Email</span>
                <span className="font-medium text-blue-500">{data.email}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-800/60">
                <span className="text-slate-400">Phone</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{data.phone || "—"}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-800/60">
                <span className="text-slate-400">Location</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{data.location || "India"}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-800/60">
                <span className="text-slate-400">Interactions Logged</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{data.totalInteractions || 6} touches</span>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact Notes</h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 leading-relaxed">
                {data.notes || "High priority creative client. Prefers asynchronous communication over Slack or Loom."}
              </p>
            </div>
          </div>
        </Drawer>
      )}

      {/* 3. EMAIL PREVIEW DRAWER */}
      {type === "email" && (
        <Drawer
          isOpen={true}
          onClose={() => setActiveDrawer(null)}
          title={data.subject}
          subtitle={`To: ${data.recipient} (${data.recipientEmail})`}
          width="max-w-lg"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Campaign</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{data.campaign}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[11px]">Status</span>
                <Badge
                  variant={
                    data.status === "Replied"
                      ? "success"
                      : data.status === "Opened"
                      ? "blue"
                      : data.status === "Sent"
                      ? "default"
                      : data.status === "Scheduled"
                      ? "purple"
                      : "danger"
                  }
                  dot
                >
                  {data.status}
                </Badge>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>Sent Time: {data.sentAt}</span>
                {data.openedAt && <span>Opened: {data.openedAt}</span>}
              </div>
              {data.repliedAt && (
                <div className="p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-md font-medium">
                  Reply recorded: {data.repliedAt} (Automation automatically paused)
                </div>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line font-sans leading-relaxed shadow-2xs">
              {data.body}
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <Button size="sm" variant="outline" onClick={() => setActiveDrawer(null)}>
                Close Preview
              </Button>
              <Button
                size="sm"
                variant="primary"
                icon={Send}
                onClick={() => {
                  alert("Simulated: Reply thread opened.");
                  setActiveDrawer(null);
                }}
              >
                Send Manual Follow-up
              </Button>
            </div>
          </div>
        </Drawer>
      )}

      {/* 4. CLIENT DETAIL DRAWER */}
      {type === "client" && (
        <Drawer
          isOpen={true}
          onClose={() => setActiveDrawer(null)}
          title={data.company}
          subtitle={`Primary Contact: ${data.name}`}
          width="max-w-lg"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Client Status</span>
                <Badge variant={data.status === "Active" ? "success" : "default"} dot>
                  {data.status}
                </Badge>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block mb-0.5">Total Revenue</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {data.revenueFormatted}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Services Contracted
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {data.services?.map((s) => (
                  <Badge key={s} variant="blue" size="sm">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Client Workspace Notes
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 leading-relaxed">
                {data.notes || "Client contract active. Deliverables tracked in Projects section."}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <Button size="sm" variant="primary" icon={Briefcase} onClick={() => setActiveDrawer(null)}>
                View Active Projects
              </Button>
            </div>
          </div>
        </Drawer>
      )}

      {/* 5. PROJECT DETAIL DRAWER */}
      {type === "project" && (
        <Drawer
          isOpen={true}
          onClose={() => setActiveDrawer(null)}
          title={data.name}
          subtitle={`Client: ${data.client}`}
          width="max-w-lg"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Status</span>
                <Badge variant={data.status === "Completed" ? "success" : "purple"} dot>
                  {data.status}
                </Badge>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block mb-0.5">Total Budget</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {data.budgetFormatted}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <span>Milestone Completion</span>
                <span>{data.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${data.progress}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400">
                {data.tasksCompleted} of {data.tasksTotal} tasks completed • Deadline: {data.deadline}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Project Scope & Deliverables
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 leading-relaxed">
                {data.description}
              </p>
            </div>

            {data.recentMilestone && (
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-800 dark:text-blue-300">
                <span className="font-semibold block mb-0.5">Latest Milestone Update:</span>
                {data.recentMilestone}
              </div>
            )}
          </div>
        </Drawer>
      )}
    </>
  );
}
