"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import StatCard from "@/components/common/StatCard";
import {
  BarChart3,
  TrendingUp,
  Users,
  Send,
  MailOpen,
  MessageSquare,
  Award,
  IndianRupee,
  Clock,
  Calendar,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  mockOutreachPerformance,
  mockRevenueTrends,
  mockPipelineFunnel,
} from "@/data/mockData";

export default function AnalyticsPage() {
  const { kpis } = useApp();
  const [range, setRange] = useState("30 Days");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ranges = ["7 Days", "30 Days", "3 Months", "6 Months", "1 Year"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Business Analytics & ROI
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Complete telemetry on client acquisition, outreach conversions, and cashflow.
          </p>
        </div>

        {/* Date Filter */}
        <div className="flex items-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-0.5 text-xs shadow-2xs">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                range === r
                  ? "bg-slate-900 dark:bg-blue-600 text-white shadow-2xs font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 9 Metrics Section (Section 35) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <StatCard
          title="Leads Generated"
          value="128"
          trend="+18%"
          trendPositive={true}
          icon={Users}
        />
        <StatCard
          title="Emails Sent"
          value="342"
          trend="98.2% delivered"
          trendPositive={true}
          icon={Send}
        />
        <StatCard
          title="Open Rate"
          value="74.2%"
          trend="+5.4% industry"
          trendPositive={true}
          icon={MailOpen}
        />
        <StatCard
          title="Reply Rate"
          value="7.9%"
          trend="27 total replies"
          trendPositive={true}
          icon={MessageSquare}
        />
        <StatCard
          title="Conversion Rate"
          value="10.9%"
          trend="Leads to Won"
          trendPositive={true}
          icon={Award}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <StatCard
          title="Meetings Booked"
          value="16"
          trend="Discovery calls"
          trendPositive={true}
          icon={Calendar}
        />
        <StatCard
          title="Projects Won"
          value="14"
          trend="+3 this quarter"
          trendPositive={true}
          icon={Award}
        />
        <StatCard
          title="Revenue Realized"
          value="₹1,84,500"
          trend="+22.4% MoM"
          trendPositive={true}
          icon={IndianRupee}
        />
        <StatCard
          title="Pending Payments"
          value="₹42,000"
          trend="3 active invoices"
          trendPositive={false}
          icon={Clock}
        />
      </div>

      {/* Charts Row 1: Outreach Trajectory & Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Outreach Velocity (Last 7 Days)
              </h3>
              <p className="text-xs text-slate-500">Emails dispatched vs responses recorded</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Outbound
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Inbound Replies
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockOutreachPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" opacity={0.3} />
                  <XAxis dataKey="day" stroke="#64748B" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0D121F",
                      borderColor: "#1E293B",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "#F8FAFC",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="emails"
                    stroke="#3B82F6"
                    strokeWidth={2.5}
                    dot={{ fill: "#3B82F6", r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="replies"
                    stroke="#10B981"
                    strokeWidth={2.5}
                    dot={{ fill: "#10B981", r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Funnel Breakdown */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-5 shadow-2xs">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            Conversion Efficiency
          </h3>
          <p className="text-xs text-slate-500 mb-4">Stage drop-off rates</p>

          <div className="space-y-3.5">
            {mockPipelineFunnel.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{s.stage}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{s.count} ({s.percentage})</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full"
                    style={{ width: s.percentage, backgroundColor: s.fill }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
