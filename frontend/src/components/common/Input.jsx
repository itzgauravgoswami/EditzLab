"use client";

import React from "react";

export function Input({
  label,
  error,
  helperText,
  icon: Icon,
  className = "",
  wrapperClassName = "",
  id,
  type = "text",
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`w-full flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide select-none"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={`w-full h-9 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
            Icon ? "pl-9" : "pl-3"
          } pr-3 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700"
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
      )}
    </div>
  );
}

export function Select({
  label,
  options = [],
  value,
  onChange,
  error,
  icon: Icon,
  className = "",
  wrapperClassName = "",
  id,
  ...props
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`w-full flex flex-col gap-1.5 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide select-none"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          className={`w-full h-9 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer ${
            Icon ? "pl-9" : "pl-3"
          } pr-8 ${
            error
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700"
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={typeof opt === "object" ? opt.value : opt}
              value={typeof opt === "object" ? opt.value : opt}
            >
              {typeof opt === "object" ? opt.label : opt}
            </option>
          ))}
        </select>
        <div className="absolute right-3 pointer-events-none text-slate-400">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}
