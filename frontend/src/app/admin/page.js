"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import StatCard from "@/components/common/StatCard";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import {
  Users,
  Send,
  MessageSquare,
  Briefcase,
  IndianRupee,
  Clock,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Mail,
  UserPlus,
  Receipt,
  FileSpreadsheet,
  Zap,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import {
  mockOutreachPerformance,
  mockRevenueTrends,
  mockPipelineFunnel,
} from "@/data/mockData";
import Link from "next/link";

export default function AdminDashboardPage() {
  const {
    user,
    kpis,
    leads,
    followups,
    activities,
    completeFollowup,
    setActiveDrawer,
    setActiveModal,
  } = useApp();

  const [dateRange, setDateRange] = useState("30 Days");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pendingFollowups = (followups || []).filter((f) => f.status === "Pending").slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Top Welcome Header with Date Range */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Good afternoon, {user?.name ? user.name.split(" ")[0] : "Founder"}</span>
            <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Here&apos;s what&apos;s happening with your freelance business.
          </p>
        </div>

        {/* Date Filter & Quick Actions */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center rounded-lg bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 p-0.5 text-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            {["7 Days", "30 Days", "This Quarter"].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  dateRange === range
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <Button
            variant="primary"
            size="sm"
            icon={UserPlus}
            onClick={() => setActiveModal("add_lead")}
            className="!bg-blue-600 hover:!bg-blue-500 text-white font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)]"
          >
            Add Lead
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={FileSpreadsheet}
            onClick={() => setActiveModal("import_sheets")}
            className="hidden sm:inline-flex !border-white/10 !bg-[#0B0F19]/60 backdrop-blur-md !text-slate-300 hover:!text-white hover:!bg-white/10"
          >
            Sync Sheets
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <StatCard
          title="Total Leads"
          value={kpis?.totalLeads ?? 128}
          trend="+14.2%"
          trendPositive={true}
          subtext="vs last mo"
          icon={Users}
        />
        <StatCard
          title="Emails Sent"
          value={kpis?.emailsSent ?? 342}
          trend="+28.6%"
          trendPositive={true}
          subtext="342 targeted"
          icon={Send}
        />
        <StatCard
          title="Replies"
          value={kpis?.replies ?? 27}
          trend="7.9%"
          trendPositive={true}
          subtext="response rate"
          icon={MessageSquare}
        />
        <StatCard
          title="Active Clients"
          value={kpis?.activeClients ?? 14}
          trend="+3 new"
          trendPositive={true}
          subtext="this quarter"
          icon={Briefcase}
        />
        <StatCard
          title="Revenue"
          value={kpis?.revenueFormatted ?? "₹1,84,500"}
          trend="+22.4%"
          trendPositive={true}
          subtext="vs last mo"
          icon={IndianRupee}
        />
        <StatCard
          title="Pending Payments"
          value={kpis?.pendingFormatted ?? "₹42,000"}
          trend={`${kpis?.pendingCount ?? 3} invoices`}
          trendPositive={false}
          subtext="due soon"
          icon={Clock}
        />
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Outreach Performance (7 cols) */}
        <div className="lg:col-span-7 bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/15 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Outreach Performance
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Emails sent, replies recorded, and discovery calls booked
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> Emails
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" /> Replies
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockOutreachPerformance} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="emailGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="replyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" opacity={0.6} />
                  <XAxis dataKey="day" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(13, 18, 31, 0.85)",
                      backdropFilter: "blur(12px)",
                      borderColor: "rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "#F8FAFC",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="emails"
                    stroke="#3B82F6"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#emailGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="replies"
                    stroke="#10B981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#replyGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Lead Pipeline Funnel (5 cols) */}
        <div className="lg:col-span-5 bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/15 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Lead Pipeline Funnel
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Conversion through stages
              </p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              <span>View CRM</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3 pt-1">
            {mockPipelineFunnel.map((stage, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300">
                    {stage.stage}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {stage.count}
                    </span>
                    <span className="text-[11px] text-slate-400 w-9 text-right font-mono">
                      {stage.percentage}
                    </span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 border border-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: stage.percentage,
                      backgroundColor: stage.fill,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Revenue Chart */}
      <div className="bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/15 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Revenue Growth (INR ₹)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Monthly booked client billings vs target projections
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 backdrop-blur-xs text-emerald-400 border border-emerald-500/20 font-semibold">
              +22.4% MoM
            </span>
            <span className="text-slate-300 font-medium">Oct Total: ₹1,84,500</span>
          </div>
        </div>

        <div className="h-56 w-full">
          {mounted && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockRevenueTrends} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" opacity={0.6} />
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis
                  stroke="#94A3B8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `₹${val / 1000}k`}
                />
                <Tooltip
                  formatter={(val) => [`₹${val.toLocaleString("en-IN")}`, "Revenue"]}
                  contentStyle={{
                    backgroundColor: "rgba(13, 18, 31, 0.85)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "#F8FAFC",
                  }}
                />
                <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Two Columns: Follow-ups Due & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Follow-ups Due (7 cols) */}
        <div className="lg:col-span-7 bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/15 transition-all flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  Follow-ups Due
                </h3>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 backdrop-blur-xs text-sky-400 border border-sky-500/20 text-xs font-semibold">
                  {pendingFollowups.length} Actionable
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Stay on top of prospect outreach cycles and never lose a deal
              </p>
            </div>
            <Link
              href="/admin/followups"
              className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-2.5 flex-1">
            {pendingFollowups.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">No pending follow-ups due.</p>
            ) : (
              pendingFollowups.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-white/5 bg-[#070A11]/50 backdrop-blur-xs hover:bg-[#070A11]/80 hover:border-white/15 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs sm:text-sm text-white truncate">
                        {item.company}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        item.priority === "High" ? "bg-rose-500/10 backdrop-blur-xs text-rose-400 border border-rose-500/20" : "bg-white/5 text-slate-300 border border-white/5"
                      }`}>
                        {item.followupNumber}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">
                      Lead: {item.leadName} • {item.service}
                    </p>
                    <p className="text-[11px] text-sky-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.dueDate}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => completeFollowup(item.id)}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1 font-medium backdrop-blur-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Done</span>
                    </button>
                    <button
                      onClick={() => {
                        const matchedLead = (leads || []).find((l) => l.name === item.leadName);
                        if (matchedLead) setActiveDrawer({ type: "lead", data: matchedLead });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-semibold transition-all flex items-center gap-1 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Follow Up</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Activity (5 cols) */}
        <div className="lg:col-span-5 bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/15 transition-all flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Recent Activity
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time business audit timeline
              </p>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 backdrop-blur-xs text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
              Live
            </span>
          </div>

          <div className="space-y-4 flex-1">
            {(activities || []).slice(0, 6).map((act, index) => (
              <div key={act.id} className="relative flex items-start gap-3">
                {/* Timeline connector */}
                {index !== 5 && (
                  <div className="absolute left-3.5 top-6 bottom-[-16px] w-px bg-white/10" />
                )}

                <div className="w-7 h-7 rounded-full bg-white/5 backdrop-blur-xs border border-white/10 flex items-center justify-center shrink-0 z-10 text-slate-300">
                  {act.type === "email_sent" && <Mail className="w-3.5 h-3.5 text-blue-400" />}
                  {act.type === "lead_added" && <UserPlus className="w-3.5 h-3.5 text-sky-400" />}
                  {act.type === "payment_received" && <Receipt className="w-3.5 h-3.5 text-emerald-400" />}
                  {act.type === "followup_completed" && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                  {act.type === "client_created" && <Briefcase className="w-3.5 h-3.5 text-purple-400" />}
                  {act.type === "project_updated" && <TrendingUp className="w-3.5 h-3.5 text-sky-400" />}
                </div>

                <div className="flex-1 min-w-0 text-xs">
                  <div className="flex items-center justify-between gap-1">
                    <p className="font-semibold text-white truncate">
                      {act.title}
                    </p>
                    <span className="text-[10px] text-slate-500 shrink-0 font-mono">{act.time}</span>
                  </div>
                  <p className="text-slate-400 truncate mt-0.5">
                    {act.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
