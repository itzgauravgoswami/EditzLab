"use client";

import React from "react";
import { AppProvider, useApp } from "@/context/AppContext";
import AdminSidebar from "@/components/admin/Sidebar";
import AdminTopbar from "@/components/admin/Topbar";
import GlobalModals from "@/components/modals/AllModals";
import GlobalDrawers from "@/components/drawers/AllDrawers";
import ToastContainer from "@/components/common/Toast";

function AdminLayoutInner({ children }) {
  const { sidebarCollapsed, toasts, removeToast } = useApp();

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col antialiased relative z-20 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Ambient background glows for rich glassmorphic refraction */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-8%] right-[10%] w-[550px] h-[550px] rounded-full bg-blue-600/12 blur-[130px]" />
        <div className="absolute top-[25%] left-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[25%] w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col relative z-10 transition-all duration-300 ${
          sidebarCollapsed ? "md:pl-16" : "md:pl-60"
        }`}
      >
        <AdminTopbar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Global Overlays: Modals, Drawers, Toasts */}
      <GlobalModals />
      <GlobalDrawers />
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AppProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AppProvider>
  );
}
