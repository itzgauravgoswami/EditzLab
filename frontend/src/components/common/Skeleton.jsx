"use client";

import React from "react";

export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-md ${className}`}
    />
  );
}

export function TableSkeleton({ rows = 5, cols = 6 }) {
  return (
    <div className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden p-4 space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-24" />
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex items-center gap-4 py-2">
          {Array.from({ length: cols }).map((_, c) => (
            <Skeleton key={c} className={`h-4 ${c === 0 ? "w-28" : "flex-1"}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-2.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3.5 w-24" />
        <Skeleton className="h-6 w-6 rounded-lg" />
      </div>
      <Skeleton className="h-7 w-20" />
      <Skeleton className="h-3 w-32" />
    </div>
  );
}
