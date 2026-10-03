"use client";

import React from "react";

export default function StatCard({
  title,
  value,
  subtext,
  icon: Icon,
  trend,
  trendPositive = true,
  onClick,
  className = "",
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative p-4 rounded-xl border border-white/10 bg-[#0B0F19]/60 backdrop-blur-md hover:bg-[#0B0F19]/80 hover:border-blue-500/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.15)] transition-all duration-200 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-medium text-slate-400 tracking-wide">
          {title}
        </span>
        {Icon && (
          <div className="w-7 h-7 rounded-lg bg-slate-800/90 text-slate-300 flex items-center justify-center shrink-0 group-hover:text-blue-400 group-hover:bg-slate-700 transition-colors">
            <Icon className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          {value}
        </h4>
      </div>

      {(subtext || trend) && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
          {trend && (
            <span
              className={`font-semibold ${
                trendPositive
                  ? "text-emerald-400"
                  : "text-rose-400"
              }`}
            >
              {trend}
            </span>
          )}
          {subtext && <span className="truncate">{subtext}</span>}
        </div>
      )}
    </div>
  );
}
