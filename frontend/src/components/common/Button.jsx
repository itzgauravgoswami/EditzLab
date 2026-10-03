"use client";

import React from "react";

export default function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "outline" | "ghost" | "danger"
  size = "md", // "sm" | "md" | "lg" | "icon"
  className = "",
  disabled = false,
  isLoading = false,
  icon: Icon,
  iconRight: IconRight,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1.5 gap-1.5 h-8",
    md: "text-sm px-3.5 py-2 gap-2 h-9",
    lg: "text-base px-5 py-2.5 gap-2.5 h-11",
    icon: "w-9 h-9 p-0",
  };

  const variantStyles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 border border-slate-700/80 shadow-sm focus:ring-slate-400 dark:bg-blue-600 dark:hover:bg-blue-500 dark:border-blue-500/50 dark:focus:ring-blue-400",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200/90 border border-slate-200/90 shadow-2xs focus:ring-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700/90",
    outline:
      "bg-transparent text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs focus:ring-slate-300 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800/80 dark:hover:text-white",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent focus:ring-slate-300 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60",
    danger:
      "bg-red-500/10 text-red-600 hover:bg-red-500/20 border border-red-200/80 focus:ring-red-400 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/60 dark:hover:bg-red-900/50",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-0.5 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : Icon ? (
        <Icon className={size === "sm" ? "w-3.5 h-3.5 shrink-0" : "w-4 h-4 shrink-0"} />
      ) : null}
      {children}
      {IconRight && !isLoading && (
        <IconRight className={size === "sm" ? "w-3.5 h-3.5 shrink-0" : "w-4 h-4 shrink-0"} />
      )}
    </button>
  );
}
