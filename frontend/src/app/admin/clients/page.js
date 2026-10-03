"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import EmptyState from "@/components/common/EmptyState";
import {
  Briefcase,
  Search,
  Plus,
  Eye,
  Building,
  Mail,
  IndianRupee,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function ClientsPage() {
  const { clients, setActiveDrawer } = useApp();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredClients = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Onboarding":
        return "blue";
      case "Completed":
        return "purple";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Client CRM & Retainers"
        description="Retain, onboard, and manage long-term freelance client relationships and project billing."
        breadcrumbs={["Business", "Clients"]}
      />

      {/* Filter and Search */}
      <div className="p-3.5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="w-full sm:max-w-xs">
          <Input
            icon={Search}
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {["All", "Active", "Onboarding", "Completed"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                statusFilter === st
                  ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-800"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Clients Table */}
      {filteredClients.length > 0 ? (
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold tracking-wider uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Client & Company</th>
                  <th className="py-3 px-4">Contracted Services</th>
                  <th className="py-3 px-4">Projects</th>
                  <th className="py-3 px-4">Total Revenue</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Last Activity</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-800 dark:text-slate-200">
                {filteredClients.map((client) => (
                  <tr
                    key={client.id}
                    onClick={() => setActiveDrawer({ type: "client", data: client })}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={client.avatar}
                          alt={client.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {client.company}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {client.name} • {client.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {client.services.map((s, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-medium text-slate-700 dark:text-slate-300">
                      {client.projectsCount} Active
                    </td>

                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      {client.revenueFormatted}
                    </td>

                    <td className="py-3.5 px-4">
                      <Badge variant={getStatusBadge(client.status)} size="sm" dot>
                        {client.status}
                      </Badge>
                    </td>

                    <td className="py-3.5 px-4 text-slate-500">{client.lastActivity}</td>

                    <td className="py-3.5 px-4 text-right">
                      <button className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
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
          icon={Briefcase}
          title="No clients found"
          description="Convert leads from your CRM pipeline to populate active client accounts."
        />
      )}
    </div>
  );
}
