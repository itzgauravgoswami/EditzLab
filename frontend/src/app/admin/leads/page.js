"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Input, Select } from "@/components/common/Input";
import EmptyState from "@/components/common/EmptyState";
import {
  Users,
  Search,
  Plus,
  FileSpreadsheet,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Mail,
  UserCheck,
  Eye,
  CheckCircle,
} from "lucide-react";

export default function LeadsPage() {
  const {
    leads,
    services,
    setActiveModal,
    setActiveDrawer,
    updateLeadStatus,
    convertLeadToClient,
  } = useApp();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [sortField, setSortField] = useState("recent");

  // Filtering
  const filteredLeads = leads
    .filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.company.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
      const matchesService =
        serviceFilter === "All" || lead.service.toLowerCase().includes(serviceFilter.toLowerCase());

      return matchesSearch && matchesStatus && matchesService;
    })
    .sort((a, b) => {
      if (sortField === "value-desc") return (b.value || 0) - (a.value || 0);
      if (sortField === "name") return a.name.localeCompare(b.name);
      return 0; // default recent
    });

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Won":
        return "success";
      case "Proposal":
        return "purple";
      case "Replied":
        return "blue";
      case "Interested":
        return "warning";
      case "Opened":
        return "blue";
      case "Lost":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads & Prospects CRM"
        description="Capture, qualify, and convert freelance prospects into paying clients."
        breadcrumbs={["Workspace", "Leads"]}
        actionLabel="Add Lead"
        onAction={() => setActiveModal("add_lead")}
        actionIcon={Plus}
        secondaryActionLabel="Import Google Sheets"
        onSecondaryAction={() => setActiveModal("import_sheets")}
        secondaryActionIcon={FileSpreadsheet}
      />

      {/* Filter and Search Bar */}
      <div className="p-3.5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="flex-1 w-full md:max-w-xs">
          <Input
            icon={Search}
            placeholder="Search by name, company, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center flex-wrap gap-2.5 w-full md:w-auto">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="All">All Statuses ({leads.length})</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Opened">Opened</option>
            <option value="Replied">Replied</option>
            <option value="Interested">Interested</option>
            <option value="Proposal">Proposal</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>

          {/* Service Filter */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="All">All Services</option>
            {services.map((s) => (
              <option key={s.id} value={s.category}>
                {s.category}
              </option>
            ))}
          </select>

          {/* Sort Filter */}
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="recent">Sort: Most Recent</option>
            <option value="value-desc">Sort: Highest Deal Value</option>
            <option value="name">Sort: Contact Name</option>
          </select>
        </div>
      </div>

      {/* CRM Leads Table */}
      {filteredLeads.length > 0 ? (
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold tracking-wider uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Contact & Company</th>
                  <th className="py-3 px-4">Service Required</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Deal Value</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Last Contact</th>
                  <th className="py-3 px-4">Next Follow-up</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-800 dark:text-slate-200">
                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors group cursor-pointer"
                    onClick={() => setActiveDrawer({ type: "lead", data: lead })}
                  >
                    {/* Name & Company */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                          {lead.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {lead.name}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {lead.company} • {lead.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Service */}
                    <td className="py-3.5 px-4 max-w-[160px] truncate text-slate-600 dark:text-slate-300">
                      {lead.service}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-4">
                      <Badge variant={getStatusBadgeVariant(lead.status)} dot size="sm">
                        {lead.status}
                      </Badge>
                    </td>

                    {/* Deal Value */}
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                      ₹{Number(lead.value).toLocaleString("en-IN")}
                    </td>

                    {/* Source */}
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                      {lead.source}
                    </td>

                    {/* Last Contact */}
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                      {lead.lastContact}
                    </td>

                    {/* Next Followup */}
                    <td className="py-3.5 px-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300 block">
                        {lead.nextFollowup}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {lead.followupStage}
                      </span>
                    </td>

                    {/* Actions */}
                    <td
                      className="py-3.5 px-4 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-end gap-1.5">
                        {lead.status !== "Won" ? (
                          <button
                            onClick={() => convertLeadToClient(lead)}
                            className="p-1.5 rounded-md hover:bg-emerald-500/10 text-emerald-600 hover:text-emerald-700 transition-colors"
                            title="Convert to Client"
                          >
                            <UserCheck className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-emerald-500 text-[11px] font-semibold flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5" /> Won
                          </span>
                        )}
                        <button
                          onClick={() => setActiveDrawer({ type: "lead", data: lead })}
                          className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <EmptyState
          icon={Users}
          title="No leads matching criteria"
          description="Try clearing your filters or create a new lead to populate your outreach pipeline."
          actionLabel="Add New Lead"
          onAction={() => setActiveModal("add_lead")}
        />
      )}
    </div>
  );
}
