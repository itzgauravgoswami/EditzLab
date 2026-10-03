"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import EmptyState from "@/components/common/EmptyState";
import {
  Contact2,
  Search,
  Mail,
  Phone,
  Building,
  MapPin,
  MessageSquare,
  Eye,
  Plus,
} from "lucide-react";

export default function ContactsPage() {
  const { contacts, setActiveDrawer } = useApp();
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("All");

  const allTags = ["All", ...Array.from(new Set(contacts.flatMap((c) => c.tags || [])))];

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());

    const matchesTag = tagFilter === "All" || c.tags?.includes(tagFilter);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Contacts Directory"
        description="Unified contact records across active leads, past clients, and agency collaborators."
        breadcrumbs={["Workspace", "Contacts"]}
        actionLabel="New Contact"
        onAction={() => alert("Simulated: Create contact form opened.")}
        actionIcon={Plus}
      />

      {/* Filter and Search */}
      <div className="p-3.5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="w-full sm:max-w-xs">
          <Input
            icon={Search}
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tag pills */}
        <div className="flex items-center flex-wrap gap-1.5 w-full sm:w-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tag)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                tagFilter === tag
                  ? "bg-slate-900 dark:bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Contacts Grid */}
      {filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setActiveDrawer({ type: "contact", data: contact })}
              className="group p-5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer space-y-4"
            >
              {/* Header with avatar */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                    {contact.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {contact.name}
                    </h4>
                    <p className="text-xs text-slate-500">{contact.role}</p>
                  </div>
                </div>

                <Badge variant={contact.status.includes("Client") ? "success" : "blue"} size="sm">
                  {contact.status}
                </Badge>
              </div>

              {/* Details list */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate font-medium">{contact.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate text-blue-500">{contact.email}</span>
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{contact.phone}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {contact.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Contact2}
          title="No contacts found"
          description="Try modifying your search criteria or tag filters."
        />
      )}
    </div>
  );
}
