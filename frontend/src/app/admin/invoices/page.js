"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  Receipt,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Download,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Input } from "@/components/common/Input";

export default function InvoicesPage() {
  const { invoices, markInvoicePaid, setActiveModal, kpis } = useApp();
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredInvoices = invoices.filter((inv) => {
    const matchesStatus = statusFilter === "All" || inv.status === statusFilter;
    const matchesSearch =
      inv.id.toLowerCase().includes(search.toLowerCase()) ||
      inv.client.toLowerCase().includes(search.toLowerCase()) ||
      inv.project.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return "success";
      case "Pending":
        return "warning";
      case "Overdue":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Invoices & Payments"
        description="Track client milestone invoices, pending payments, and cash flow in Indian Rupees (₹)."
        breadcrumbs={["Business", "Invoices"]}
        actionLabel="Create Invoice"
        onAction={() => setActiveModal("create_invoice")}
        actionIcon={Plus}
      />

      {/* KPI mini-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl shadow-2xs">
          <span className="text-xs text-slate-500 block">Total Revenue Realized</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {kpis.revenueFormatted}
          </h3>
          <span className="text-[11px] text-emerald-500 font-medium">Recorded in FY 2026</span>
        </div>
        <div className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl shadow-2xs">
          <span className="text-xs text-slate-500 block">Pending Outstanding</span>
          <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mt-1">
            {kpis.pendingFormatted}
          </h3>
          <span className="text-[11px] text-slate-400">Awaiting client bank transfer</span>
        </div>
        <div className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl shadow-2xs">
          <span className="text-xs text-slate-500 block">Total Invoices Issued</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {invoices.length}
          </h3>
          <span className="text-[11px] text-slate-400">94.8% payment collection rate</span>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="p-3.5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="w-full sm:max-w-xs">
          <Input
            icon={Search}
            placeholder="Search invoice # or client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {["All", "Paid", "Pending", "Overdue", "Draft"].map((st) => (
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

      {/* Invoices Table */}
      {filteredInvoices.length > 0 ? (
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold tracking-wider uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Invoice #</th>
                  <th className="py-3 px-4">Client & Project</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Issued</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-800 dark:text-slate-200">
                {filteredInvoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-900 dark:text-white">
                      {inv.id}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {inv.client}
                      </div>
                      <div className="text-[11px] text-slate-400">{inv.project}</div>
                    </td>

                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      {inv.amountFormatted}
                    </td>

                    <td className="py-3.5 px-4 text-slate-500">{inv.issuedDate}</td>
                    <td className="py-3.5 px-4 text-slate-500">{inv.dueDate}</td>

                    <td className="py-3.5 px-4">
                      <Badge variant={getStatusBadge(inv.status)} size="sm" dot>
                        {inv.status}
                      </Badge>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {inv.status !== "Paid" && (
                          <Button
                            size="sm"
                            variant="outline"
                            icon={CheckCircle2}
                            onClick={() => markInvoicePaid(inv.id)}
                          >
                            Mark Paid
                          </Button>
                        )}
                        <button
                          onClick={() => alert(`Simulated PDF receipt downloaded for ${inv.id}`)}
                          className="p-1.5 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                          title="Download PDF Invoice"
                        >
                          <Download className="w-4 h-4" />
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
          icon={Receipt}
          title="No invoices found"
          description="Create your first client invoice to begin billing for project milestones."
          actionLabel="Create Invoice"
          onAction={() => setActiveModal("create_invoice")}
        />
      )}
    </div>
  );
}
