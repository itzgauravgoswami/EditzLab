"use client";

import React from "react";

export default function Badge({
  children,
  variant = "default", // "default" | "success" | "warning" | "danger" | "purple" | "blue" | "neutral"
  size = "md", // "sm" | "md"
  dot = false,
  className = "",
}) {
  const styles = {
    default: "bg-slate-100 text-slate-700 border-slate-200/80 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/50",
    warning: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/50",
    danger: "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800/50",
    blue: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/50",
    purple: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/50",
    neutral: "bg-slate-800 text-slate-300 border-slate-700",
  };

  const dotColors = {
    default: "bg-slate-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    neutral: "bg-slate-400",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1 font-medium",
    md: "text-xs px-2.5 py-0.75 gap-1.5 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border leading-tight ${sizeStyles[size]} ${styles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant] || "bg-current"}`}
        />
      )}
      {children}
    </span>
  );
}
