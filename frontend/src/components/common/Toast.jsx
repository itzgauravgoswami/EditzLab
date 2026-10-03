"use client";

import React from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";

export default function ToastContainer({ toasts = [], onDismiss }) {
  if (!toasts.length) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />,
    danger: <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />,
    info: <Info className="w-4 h-4 text-blue-500 shrink-0" />,
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-3.5 bg-slate-900/95 dark:bg-slate-900 border border-slate-700/80 text-white rounded-xl shadow-xl backdrop-blur-md transition-all transform animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {icons[toast.type] || icons.info}
          <div className="flex-1 text-xs">
            {toast.title && (
              <p className="font-semibold text-slate-100 mb-0.5">{toast.title}</p>
            )}
            <p className="text-slate-300 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
