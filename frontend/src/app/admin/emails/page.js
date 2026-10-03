"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  Mail,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  Plus,
} from "lucide-react";
import { Input } from "@/components/common/Input";

export default function EmailsPage() {
  const { emails, setActiveDrawer, gmailConnected, setActiveModal } = useApp();
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEmails = emails.filter((em) => {
    const matchesTab = tab === "All" || em.status === tab;
    const matchesSearch =
      em.recipient.toLowerCase().includes(search.toLowerCase()) ||
      em.subject.toLowerCase().includes(search.toLowerCase()) ||
      em.company.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getBadgeVariant = (status) => {
    switch (status) {
      case "Replied":
        return "success";
      case "Opened":
        return "blue";
      case "Scheduled":
        return "purple";
      case "Bounced":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Email Activity & Outreach Feed"
        description="Comprehensive audit trail of sent cold emails, automated follow-ups, and recorded replies."
        breadcrumbs={["Workspace", "Emails"]}
        actionLabel={gmailConnected ? "Compose Email" : "Connect Gmail"}
        onAction={() =>
          gmailConnected
            ? alert("Simulated: Email composer opened.")
            : setActiveModal("connect_gmail")
        }
        actionIcon={Mail}
      />

      {/* Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {["All", "Sent", "Scheduled", "Opened", "Replied", "Bounced"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                tab === t
                  ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <Input
            icon={Search}
            placeholder="Search email thread..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Emails Table */}
      {filteredEmails.length > 0 ? (
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold tracking-wider uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Recipient & Company</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Campaign</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Sent Time</th>
                  <th className="py-3 px-4">Opened</th>
                  <th className="py-3 px-4">Replied</th>
                  <th className="py-3 px-4 text-right">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-800 dark:text-slate-200">
                {filteredEmails.map((email) => (
                  <tr
                    key={email.id}
                    onClick={() => setActiveDrawer({ type: "email", data: email })}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {email.recipient}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {email.company} • {email.recipientEmail}
                      </div>
                    </td>

                    <td className="py-3 px-4 max-w-xs truncate font-medium text-slate-700 dark:text-slate-300">
                      {email.subject}
                    </td>

                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                      {email.campaign}
                    </td>

                    <td className="py-3 px-4">
                      <Badge variant={getBadgeVariant(email.status)} size="sm" dot>
                        {email.status}
                      </Badge>
                    </td>

                    <td className="py-3 px-4 text-slate-500">{email.sentAt}</td>
                    <td className="py-3 px-4 text-slate-500">{email.openedAt || "—"}</td>
                    <td className="py-3 px-4 text-slate-500 font-medium text-emerald-600 dark:text-emerald-400">
                      {email.repliedAt || "—"}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDrawer({ type: "email", data: email });
                        }}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <EmptyState
          icon={Mail}
          title="No emails in this view"
          description="Emails sent through outreach campaigns or single follow-ups will show up here."
        />
      )}
    </div>
  );
}
