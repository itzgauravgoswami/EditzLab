"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Input, Select } from "@/components/common/Input";
import {
  User,
  Building,
  Mail,
  FileSpreadsheet,
  Bell,
  Shield,
  Palette,
  CheckCircle2,
  Trash2,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

export default function SettingsPage() {
  const {
    user,
    setUser,
    gmailConnected,
    connectedGmailAddress,
    disconnectGmail,
    setActiveModal,
    sheetsConnected,
    lastSheetSync,
    addToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState("email");
  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    workspaceName: user.workspaceName,
    timezone: user.timezone,
    currency: user.currency,
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, ...profileForm }));
    addToast("Profile details updated successfully", "success", "Saved");
  };

  const tabs = [
    { id: "email", label: "Email Accounts", icon: Mail },
    { id: "sheets", label: "Google Sheets", icon: FileSpreadsheet },
    { id: "profile", label: "Profile", icon: User },
    { id: "workspace", label: "Workspace", icon: Building },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & API", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings & Integrations"
        description="Manage workspace preferences, connected outreach accounts, Google Sheets data pipes, and security."
        breadcrumbs={["System", "Settings"]}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Settings Navigation Tabs (3 cols) */}
        <div className="md:col-span-3 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                  isActive
                    ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel (9 cols) */}
        <div className="md:col-span-9 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-5 shadow-2xs">
          {/* 1. EMAIL ACCOUNTS (GMAIL UI - Section 30) */}
          {activeTab === "email" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Email Accounts & Outreach Mailboxes
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect your Google Workspace or Gmail account for automated outbound sequences and instant reply tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-center justify-center font-bold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Google Workspace / Gmail</span>
                        {gmailConnected ? (
                          <Badge variant="success" size="sm" dot>Connected</Badge>
                        ) : (
                          <Badge variant="default" size="sm">Not connected</Badge>
                        )}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {gmailConnected
                          ? `Syncing active for ${connectedGmailAddress || "gaurav@editzlab.studio"}`
                          : "Connect your primary freelance domain email address"}
                      </p>
                    </div>
                  </div>

                  {gmailConnected ? (
                    <Button
                      variant="danger"
                      size="sm"
                      icon={Trash2}
                      onClick={disconnectGmail}
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Mail}
                      onClick={() => setActiveModal("connect_gmail")}
                    >
                      Connect Gmail
                    </Button>
                  )}
                </div>

                {gmailConnected && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Daily Send Limit</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">50 emails/day</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Warmup State</span>
                      <span className="font-semibold text-emerald-500">100% Reputable</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Reply Tracking</span>
                      <span className="font-semibold text-blue-500">Auto-Pause Enabled</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. GOOGLE SHEETS SETTINGS (Section 29) */}
          {activeTab === "sheets" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Google Sheets Lead Pipeline Sync
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Bi-directional sync between Google Sheets and EditzLab CRM.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Connected Google Sheets</span>
                        <Badge variant="success" size="sm" dot>Active Sync</Badge>
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Last synced: {lastSheetSync}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={RefreshCw}
                    onClick={() => addToast("Google Sheets refreshed! 0 new rows.", "info", "Synced")}
                  >
                    Sync Now
                  </Button>
                </div>

                <div className="pt-2">
                  <Button
                    size="sm"
                    variant="primary"
                    icon={FileSpreadsheet}
                    onClick={() => setActiveModal("import_sheets")}
                  >
                    Import New Leads from Sheet
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* 3. PROFILE SETTINGS */}
          {activeTab === "profile" && (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Freelancer Profile
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Personal and billing identity used across client proposals and emails.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Professional Title"
                  value={profileForm.role}
                  onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                />
                <Input
                  label="Default Timezone"
                  value={profileForm.timezone}
                  onChange={(e) => setProfileForm({ ...profileForm, timezone: e.target.value })}
                />
              </div>

              <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-slate-800">
                <Button variant="primary" size="sm" type="submit">
                  Save Changes
                </Button>
              </div>
            </form>
          )}

          {/* 4. WORKSPACE */}
          {activeTab === "workspace" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Workspace Preferences
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Configure default currency, branding, and team settings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Workspace Name"
                  value={profileForm.workspaceName}
                  onChange={(e) => setProfileForm({ ...profileForm, workspaceName: e.target.value })}
                />
                <Select
                  label="Default Billing Currency"
                  value={profileForm.currency}
                  onChange={(e) => setProfileForm({ ...profileForm, currency: e.target.value })}
                  options={[
                    { value: "INR (₹)", label: "INR (₹) - Indian Rupee" },
                    { value: "USD ($)", label: "USD ($) - US Dollar" },
                    { value: "EUR (€)", label: "EUR (€) - Euro" },
                  ]}
                />
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg text-xs text-slate-500">
                Current Plan: <span className="font-semibold text-slate-800 dark:text-slate-200">{user.plan}</span> (Unlimited Leads, Sprints & Campaigns)
              </div>
            </div>
          )}

          {/* 5. NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Notification Rules
              </h3>
              <div className="space-y-3 text-xs">
                {[
                  { title: "Lead Reply Alerts", desc: "Send immediate notification when a prospect responds to an outreach email." },
                  { title: "Follow-up Reminders", desc: "Notify every morning at 9:00 AM regarding follow-ups due today." },
                  { title: "Invoice Payment Alerts", desc: "Notify when a client invoice is marked Paid." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-blue-600 cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. SECURITY */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Security & Developer API Keys
              </h3>
              <p className="text-xs text-slate-500">
                Manage personal API keys for headless webhook integrations.
              </p>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">editz_live_948f93...2026</span>
                <Button size="sm" variant="outline" onClick={() => addToast("API Key copied to clipboard", "info")}>
                  Copy Key
                </Button>
              </div>
            </div>
          )}

          {/* 7. APPEARANCE */}
          {activeTab === "appearance" && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Theme & Layout Styling
              </h3>
              <p className="text-xs text-slate-500">
                Tailored for high-focus deep navy and precision SaaS aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl border-2 border-blue-500 bg-[#0B0F19] text-white flex items-center justify-between font-semibold">
                  <span>EditzLab Studio Dark (Default)</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white text-slate-900 flex items-center justify-between font-semibold">
                  <span>Clean White Light</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
