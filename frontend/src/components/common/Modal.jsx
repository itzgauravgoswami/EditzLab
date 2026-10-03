"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-lg", // max-w-md | max-w-lg | max-w-xl | max-w-2xl
  showClose = true,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full ${maxWidth} bg-[#0F1420]/85 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-6 transition-all duration-200 z-10 my-auto shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`}
      >
        <div className="flex items-start justify-between gap-4 mb-5 pb-3 border-b border-white/10">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-slate-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {showClose && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="max-h-[75vh] overflow-y-auto pr-1">{children}</div>
      </div>
    </div>
  );
}

export function Drawer({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  width = "max-w-md", // max-w-md | max-w-lg | max-w-xl
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div
        className={`relative w-full ${width} bg-[#0D121F]/85 backdrop-blur-2xl border-l border-white/10 shadow-2xl h-full flex flex-col z-10 transform transition-transform duration-250 ease-out shadow-[inset_1px_0_0_0_rgba(255,255,255,0.08)]`}
      >
        <div className="flex items-start justify-between gap-4 p-5 border-b border-white/10">
          <div>
            <h3 className="text-base font-semibold text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}
