"use client";

import React from "react";
import Button from "./Button";

export default function PageHeader({
  title,
  description,
  breadcrumbs = [],
  actionLabel,
  onAction,
  actionIcon,
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionIcon,
  children,
  className = "",
}) {
  return (
    <div className={`mb-6 sm:mb-8 flex flex-col gap-3 ${className}`}>
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>/</span>}
              <span
                className={
                  idx === breadcrumbs.length - 1
                    ? "text-slate-700 dark:text-slate-300 font-medium"
                    : "hover:text-slate-600 dark:hover:text-slate-400"
                }
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </nav>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center flex-wrap gap-2.5 shrink-0">
          {children}

          {secondaryActionLabel && onSecondaryAction && (
            <Button
              variant="outline"
              size="sm"
              icon={secondaryActionIcon}
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
          )}

          {actionLabel && onAction && (
            <Button
              variant="primary"
              size="sm"
              icon={actionIcon}
              onClick={onAction}
            >
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
