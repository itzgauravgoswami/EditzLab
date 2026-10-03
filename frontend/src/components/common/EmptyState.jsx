"use client";

import React from "react";
import Button from "./Button";

export default function EmptyState({
  icon: Icon,
  title = "No items found",
  description = "Get started by creating your first entry to organize your workspace.",
  actionLabel,
  onAction,
  actionIcon,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 shadow-2xs">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
        {title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mb-5 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" icon={actionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
