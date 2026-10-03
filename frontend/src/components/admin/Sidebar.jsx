"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/brand/Logo";
import {
  LayoutDashboard,
  Users,
  Contact2,
  Send,
  Mail,
  CalendarClock,
  FileCode2,
  GitBranch,
  Briefcase,
  Layers,
  Receipt,
  Sparkles,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ExternalLink,
  Plus,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const {
    user,
    sidebarCollapsed,
    setSidebarCollapsed,
    mobileMenuOpen,
    setMobileMenuOpen,
    setActiveModal,
    followups,
    leads,
  } = useApp();

  const pendingFollowupsCount = followups.filter((f) => f.timeframe === "Today" && f.status === "Pending").length;
  const newLeadsCount = leads.filter((l) => l.status === "New").length;

  const navigationGroups = [
    {
      group: "Workspace",
      items: [
        { label: "Overview", href: "/admin", icon: LayoutDashboard },
        { label: "Leads", href: "/admin/leads", icon: Users, badge: newLeadsCount > 0 ? newLeadsCount : null },
        { label: "Contacts", href: "/admin/contacts", icon: Contact2 },
        { label: "Campaigns", href: "/admin/campaigns", icon: Send },
        { label: "Emails", href: "/admin/emails", icon: Mail },
        { label: "Follow-ups", href: "/admin/followups", icon: CalendarClock, badge: pendingFollowupsCount > 0 ? pendingFollowupsCount : null, badgeColor: "bg-amber-500" },
        { label: "Templates", href: "/admin/templates", icon: FileCode2 },
        { label: "Automations", href: "/admin/automations", icon: GitBranch },
      ],
    },
    {
      group: "Business",
      items: [
        { label: "Clients", href: "/admin/clients", icon: Briefcase },
        { label: "Projects", href: "/admin/projects", icon: Layers },
        { label: "Invoices", href: "/admin/invoices", icon: Receipt },
        { label: "Services", href: "/admin/services", icon: Sparkles },
      ],
    },
    {
      group: "Insights",
      items: [
        { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
      ],
    },
    {
      group: "System",
      items: [
        { label: "Settings", href: "/admin/settings", icon: Settings },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 flex flex-col bg-[#0B0F19]/80 backdrop-blur-2xl border-r border-white/10 text-slate-300 transition-all duration-300 ease-in-out md:translate-x-0 shadow-xl ${
          mobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"
        } ${sidebarCollapsed ? "md:w-16" : "md:w-60"}`}
      >
        {/* Top Header / Logo */}
        <div className="flex items-center justify-between h-14 px-3.5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <Logo
              size="sm"
              href="/admin"
              showWordmark={!sidebarCollapsed}
              variant="light"
            />
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden md:flex items-center justify-center w-6 h-6 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-3.5 h-3.5" />
            ) : (
              <ChevronLeft className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Quick Action: New Lead CTA */}
        {!sidebarCollapsed && (
          <div className="p-3 pb-1 shrink-0">
            <button
              onClick={() => setActiveModal("add_lead")}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 text-xs font-semibold tracking-wide transition-all shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Capture New Lead</span>
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-5 scrollbar-thin scrollbar-thumb-slate-800">
          {navigationGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              {!sidebarCollapsed ? (
                <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {group.group}
                </p>
              ) : (
                <div className="h-px bg-slate-800/60 my-2 mx-1" />
              )}

              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group relative flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-2xs font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    } ${sidebarCollapsed ? "justify-center px-0 py-2" : ""}`}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    />

                    {!sidebarCollapsed && (
                      <span className="flex-1 truncate tracking-tight">{item.label}</span>
                    )}

                    {!sidebarCollapsed && item.badge !== null && item.badge !== undefined && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full text-white ${
                          item.badgeColor || "bg-blue-500"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Tooltip on collapse */}
                    {sidebarCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-[11px] rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-slate-700">
                        {item.label}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Public Website Switcher Link */}
        <div className="px-2.5 py-2 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors ${
              sidebarCollapsed ? "justify-center" : ""
            }`}
            title="Open Public Website in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            {!sidebarCollapsed && <span className="truncate">Public Website</span>}
          </Link>
        </div>

        {/* User Profile Card at bottom */}
        <div className="p-2.5 border-t border-white/10 shrink-0 bg-white/5 backdrop-blur-xs">
          <div
            className={`flex items-center gap-2.5 ${
              sidebarCollapsed ? "justify-center" : "px-1.5 py-1"
            }`}
          >
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-700"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#0B0F19]" />
            </div>

            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-200 truncate">
                  {user.name}
                </p>
                <p className="text-[10px] text-slate-500 truncate">{user.plan}</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
