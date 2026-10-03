"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Menu,
  Search,
  Bell,
  Plus,
  FileSpreadsheet,
  Mail,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronDown,
  UserPlus,
  Send,
  FileText,
} from "lucide-react";
import Button from "@/components/common/Button";

export default function AdminTopbar() {
  const {
    user,
    mobileMenuOpen,
    setMobileMenuOpen,
    setActiveModal,
    gmailConnected,
    sheetsConnected,
    activities,
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [quickCreateOpen, setQuickCreateOpen] = useState(false);

  // Format today's date cleanly
  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-30 h-14 bg-[#0B0F19]/75 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4 shadow-sm">
      {/* Left: Mobile hamburger & Search trigger */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white md:hidden hover:bg-white/5 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Button */}
        <button
          onClick={() => setActiveModal("command_k")}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900/50 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs transition-all w-44 sm:w-64 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
        >
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate">Search leads, campaigns...</span>
          <kbd className="hidden sm:inline-block ml-auto text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded border border-white/10 text-slate-300">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Google Sheets Status Pill */}
        <button
          onClick={() => setActiveModal("import_sheets")}
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors"
          title="Google Sheets Auto-Sync active"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Sheets Synced</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </button>

        {/* Gmail Status Pill */}
        {gmailConnected ? (
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Gmail Connected</span>
          </div>
        ) : (
          <button
            onClick={() => setActiveModal("connect_gmail")}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Connect Gmail</span>
          </button>
        )}

        {/* Date Display */}
        <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 border-l border-slate-800 pl-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{todayFormatted}</span>
        </div>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-[#0B0F19]" />
          </button>

          {notificationsOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setNotificationsOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-80 bg-[#0D121F]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 p-3 space-y-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h4 className="text-xs font-semibold text-white">
                    Recent Activity
                  </h4>
                  <span className="text-[10px] text-blue-400 font-medium cursor-pointer hover:underline">
                    Mark all read
                  </span>
                </div>
                <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                  {activities.slice(0, 5).map((act) => (
                    <div
                      key={act.id}
                      className="p-2 rounded-lg bg-slate-900/40 backdrop-blur-xs hover:bg-slate-900/80 border border-white/5 text-xs transition-colors"
                    >
                      <p className="font-medium text-slate-200">
                        {act.title}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                        {act.subtitle}
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {act.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quick Action (+ New) Dropdown */}
        <div className="relative">
          <Button
            size="sm"
            variant="primary"
            icon={Plus}
            onClick={() => setQuickCreateOpen(!quickCreateOpen)}
            className="hidden sm:inline-flex"
          >
            <span>New</span>
            <ChevronDown className="w-3 h-3 ml-0.5 opacity-70" />
          </Button>

          {quickCreateOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setQuickCreateOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-[#0D121F]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 py-1.5 space-y-0.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <button
                  onClick={() => {
                    setQuickCreateOpen(false);
                    setActiveModal("add_lead");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 text-left transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5 text-blue-500" />
                  <span>Add Lead</span>
                </button>
                <button
                  onClick={() => {
                    setQuickCreateOpen(false);
                    setActiveModal("create_campaign");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 text-left transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-purple-500" />
                  <span>New Campaign</span>
                </button>
                <button
                  onClick={() => {
                    setQuickCreateOpen(false);
                    setActiveModal("create_invoice");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 text-left transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Create Invoice</span>
                </button>
                <div className="h-px bg-slate-800 my-1" />
                <button
                  onClick={() => {
                    setQuickCreateOpen(false);
                    setActiveModal("import_sheets");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 text-left transition-colors"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Import Sheets</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
