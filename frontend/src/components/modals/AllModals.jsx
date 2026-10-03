"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Modal } from "@/components/common/Modal";
import { Input, Select } from "@/components/common/Input";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import {
  FileSpreadsheet,
  Mail,
  UserPlus,
  Send,
  FileText,
  Search,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlobalModals() {
  const {
    activeModal,
    setActiveModal,
    addLead,
    importLeadsFromSheets,
    connectGmail,
    disconnectGmail,
    gmailConnected,
    connectedGmailAddress,
    addCampaign,
    addInvoice,
    addTemplate,
    services,
    clients,
    leads,
  } = useApp();

  const router = useRouter();

  // 1. Add Lead Modal State
  const [leadForm, setLeadForm] = useState({
    name: "",
    company: "",
    title: "Founder & CEO",
    email: "",
    phone: "",
    service: services[0]?.name || "Website Development & Headless CMS",
    value: "35000",
    status: "New",
    source: "Manual Entry",
    notes: "",
  });

  const handleAddLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;
    addLead(leadForm);
    setLeadForm({
      name: "",
      company: "",
      title: "Founder & CEO",
      email: "",
      phone: "",
      service: services[0]?.name || "Website Development & Headless CMS",
      value: "35000",
      status: "New",
      source: "Manual Entry",
      notes: "",
    });
    setActiveModal(null);
  };

  // 2. Google Sheets Import Modal State
  const [sheetUrl, setSheetUrl] = useState("https://docs.google.com/spreadsheets/d/1X9_EditzLab_Leads_Batch_2026/edit");
  const [selectedSheet, setSelectedSheet] = useState("Q4 Marketing Leads (Verified)");
  const [sheetStep, setSheetStep] = useState(1); // 1: input, 2: preview, 3: importing

  const mockSheetRows = [
    { name: "Devika Sen", company: "Aura Skincare Co", title: "Brand Lead", email: "devika@auraskincare.in", service: "Commercial Video Editing & Motion", value: 30000 },
    { name: "Rajesh Kulkarni", company: "FinEdge Wealth", title: "VP Marketing", email: "rajesh@finedge.io", service: "Website Development & Headless CMS", value: 50000 },
    { name: "Samira Patel", company: "Orbit Studio", title: "Creative Director", email: "samira@orbitstudio.design", service: "Product & UI/UX Design System", value: 40000 },
  ];

  const handleSheetsImport = () => {
    setSheetStep(3);
    setTimeout(() => {
      importLeadsFromSheets(mockSheetRows);
      setSheetStep(1);
      setActiveModal(null);
    }, 900);
  };

  // 3. Gmail OAuth Modal State
  const [gmailAccountInput, setGmailAccountInput] = useState("gaurav@editzlab.studio");
  const [isConnectingGmail, setIsConnectingGmail] = useState(false);

  const handleConnectGmailAction = () => {
    setIsConnectingGmail(true);
    setTimeout(() => {
      connectGmail(gmailAccountInput);
      setIsConnectingGmail(false);
      setActiveModal(null);
    }, 1000);
  };

  // 4. Create Campaign Modal State
  const [campaignForm, setCampaignForm] = useState({
    name: "",
    service: services[0]?.name || "Website Development & Headless CMS",
    leadsCount: "25",
    sequenceSteps: "3",
    description: "",
  });

  const handleCreateCampaignSubmit = (e) => {
    e.preventDefault();
    if (!campaignForm.name) return;
    addCampaign(campaignForm);
    setCampaignForm({
      name: "",
      service: services[0]?.name || "Website Development & Headless CMS",
      leadsCount: "25",
      sequenceSteps: "3",
      description: "",
    });
    setActiveModal(null);
  };

  // 5. Create Invoice Modal State
  const [invoiceForm, setInvoiceForm] = useState({
    client: clients[0]?.name || "Apex Wealth Advisory",
    clientEmail: clients[0]?.email || "karan@apexwealth.co.in",
    project: "Custom Sprint Milestone",
    amount: "25000",
    dueDate: "In 14 days",
    status: "Pending",
    serviceDescription: "Milestone Deliverable & Code Handoff",
  });

  const handleCreateInvoiceSubmit = (e) => {
    e.preventDefault();
    addInvoice(invoiceForm);
    setActiveModal(null);
  };

  // 6. Command Palette State
  const [searchQuery, setSearchQuery] = useState("");

  const navigationCommands = [
    { title: "Overview Dashboard", path: "/admin", category: "Navigation" },
    { title: "Leads CRM", path: "/admin/leads", category: "Navigation" },
    { title: "Contacts Directory", path: "/admin/contacts", category: "Navigation" },
    { title: "Outreach Campaigns", path: "/admin/campaigns", category: "Navigation" },
    { title: "Email Inbox & Sent", path: "/admin/emails", category: "Navigation" },
    { title: "Follow-ups Due", path: "/admin/followups", category: "Navigation" },
    { title: "Email Templates", path: "/admin/templates", category: "Navigation" },
    { title: "Active Clients", path: "/admin/clients", category: "Navigation" },
    { title: "Projects & Sprints", path: "/admin/projects", category: "Navigation" },
    { title: "Invoices & Revenue", path: "/admin/invoices", category: "Navigation" },
    { title: "Services Catalog", path: "/admin/services", category: "Navigation" },
    { title: "Business Analytics", path: "/admin/analytics", category: "Navigation" },
    { title: "Workflow Automations", path: "/admin/automations", category: "Navigation" },
    { title: "Settings & Integrations", path: "/admin/settings", category: "Navigation" },
  ];

  const filteredCommands = navigationCommands.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* 1. ADD LEAD MODAL */}
      <Modal
        isOpen={activeModal === "add_lead"}
        onClose={() => setActiveModal(null)}
        title="Add New Lead"
        subtitle="Capture prospect details and initiate the outreach pipeline."
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleAddLeadSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Contact Name"
              placeholder="e.g. Aarav Sharma"
              required
              value={leadForm.name}
              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
            />
            <Input
              label="Company Name"
              placeholder="e.g. ABC Technologies"
              required
              value={leadForm.company}
              onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Work Email"
              type="email"
              placeholder="aarav@abctech.io"
              required
              value={leadForm.email}
              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
            />
            <Input
              label="Phone / WhatsApp"
              placeholder="+91 98200 00000"
              value={leadForm.phone}
              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Select
              label="Service Interest"
              value={leadForm.service}
              onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
              options={services.map((s) => ({ value: s.name, label: s.name }))}
            />
            <Input
              label="Estimated Value (₹ INR)"
              type="number"
              placeholder="35000"
              value={leadForm.value}
              onChange={(e) => setLeadForm({ ...leadForm, value: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Select
              label="Initial Status"
              value={leadForm.status}
              onChange={(e) => setLeadForm({ ...leadForm, status: e.target.value })}
              options={[
                { value: "New", label: "New Lead" },
                { value: "Contacted", label: "Contacted" },
                { value: "Opened", label: "Opened" },
                { value: "Replied", label: "Replied" },
                { value: "Interested", label: "Interested" },
                { value: "Proposal", label: "Proposal" },
              ]}
            />
            <Select
              label="Lead Source"
              value={leadForm.source}
              onChange={(e) => setLeadForm({ ...leadForm, source: e.target.value })}
              options={[
                { value: "Manual Entry", label: "Manual Entry" },
                { value: "Cold Email", label: "Cold Email" },
                { value: "LinkedIn Outreach", label: "LinkedIn Outreach" },
                { value: "Twitter DM", label: "Twitter DM" },
                { value: "Referral", label: "Referral" },
                { value: "Website Referral", label: "Website Referral" },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Internal Notes / Context
            </label>
            <textarea
              rows={2}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              placeholder="Context regarding their requirement, tech stack, or timing..."
              value={leadForm.notes}
              onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" icon={UserPlus}>
              Create Lead
            </Button>
          </div>
        </form>
      </Modal>

      {/* 2. GOOGLE SHEETS IMPORT MODAL */}
      <Modal
        isOpen={activeModal === "import_sheets"}
        onClose={() => setActiveModal(null)}
        title="Import Leads from Google Sheets"
        subtitle="Frontend representation of Google Sheets data synchronization."
        maxWidth="max-w-xl"
      >
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-700 dark:text-blue-300 flex items-start gap-2.5">
            <FileSpreadsheet className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Simulated Google Sheets Integration:</span>{" "}
              Enter your published Google Sheet link or select a worksheet to preview and import records directly into your CRM.
            </div>
          </div>

          <Input
            label="Google Sheet URL"
            value={sheetUrl}
            onChange={(e) => setSheetUrl(e.target.value)}
            placeholder="https://docs.google.com/spreadsheets/d/..."
          />

          <Select
            label="Select Worksheet"
            value={selectedSheet}
            onChange={(e) => setSelectedSheet(e.target.value)}
            options={[
              { value: "Q4 Marketing Leads (Verified)", label: "Sheet 1: Q4 Marketing Leads (Verified) - 3 rows" },
              { value: "Agency Outreach Raw", label: "Sheet 2: Agency Outreach Raw" },
              { value: "Founder Network Sep 2026", label: "Sheet 3: Founder Network Sep 2026" },
            ]}
          />

          {/* Preview Rows Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Preview Data (3 Rows Ready to Import)</span>
              <Badge variant="blue" size="sm">Mapped 5 Columns</Badge>
            </div>

            <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500">
                  <tr>
                    <th className="p-2.5 font-medium">Name</th>
                    <th className="p-2.5 font-medium">Company</th>
                    <th className="p-2.5 font-medium">Email</th>
                    <th className="p-2.5 font-medium">Service</th>
                    <th className="p-2.5 font-medium text-right">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  {mockSheetRows.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-medium">{r.name}</td>
                      <td className="p-2.5">{r.company}</td>
                      <td className="p-2.5 text-slate-500">{r.email}</td>
                      <td className="p-2.5 truncate max-w-[140px]">{r.service}</td>
                      <td className="p-2.5 text-right font-medium">₹{r.value.toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={FileSpreadsheet}
              isLoading={sheetStep === 3}
              onClick={handleSheetsImport}
            >
              Confirm & Import 3 Leads
            </Button>
          </div>
        </div>
      </Modal>

      {/* 3. GMAIL OAUTH CONNECTION MODAL */}
      <Modal
        isOpen={activeModal === "connect_gmail"}
        onClose={() => setActiveModal(null)}
        title="Connect Google Workspace / Gmail"
        subtitle="Future-ready email synchronization for outreach and automated replies."
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3.5 p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 font-bold shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Google OAuth 2.0 Bridge
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Send cold emails and automatically detect client replies.
              </p>
            </div>
          </div>

          <Input
            label="Google Email Address"
            type="email"
            value={gmailAccountInput}
            onChange={(e) => setGmailAccountInput(e.target.value)}
            placeholder="gaurav@editzlab.studio"
          />

          <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Permissions requested:
            </p>
            <div className="space-y-1 pl-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Send emails on your behalf via personal domain</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Read replies to stop sequence follow-ups automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Track open and click webhooks</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Mail}
              isLoading={isConnectingGmail}
              onClick={handleConnectGmailAction}
            >
              Simulate Google Sign-In
            </Button>
          </div>
        </div>
      </Modal>

      {/* 4. CREATE CAMPAIGN MODAL */}
      <Modal
        isOpen={activeModal === "create_campaign"}
        onClose={() => setActiveModal(null)}
        title="Create New Outreach Campaign"
        subtitle="Set up a targeted sequence for your freelance services."
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleCreateCampaignSubmit} className="space-y-4">
          <Input
            label="Campaign Name"
            placeholder="e.g. Q4 SaaS Founder Outreach"
            required
            value={campaignForm.name}
            onChange={(e) => setCampaignForm({ ...campaignForm, name: e.target.value })}
          />

          <Select
            label="Primary Service Promoted"
            value={campaignForm.service}
            onChange={(e) => setCampaignForm({ ...campaignForm, service: e.target.value })}
            options={services.map((s) => ({ value: s.name, label: s.name }))}
          />

          <div className="grid grid-cols-2 gap-3.5">
            <Input
              label="Target Leads in Cohort"
              type="number"
              value={campaignForm.leadsCount}
              onChange={(e) => setCampaignForm({ ...campaignForm, leadsCount: e.target.value })}
            />
            <Select
              label="Sequence Steps"
              value={campaignForm.sequenceSteps}
              onChange={(e) => setCampaignForm({ ...campaignForm, sequenceSteps: e.target.value })}
              options={[
                { value: "2", label: "2 Steps (Initial + 1 Follow-up)" },
                { value: "3", label: "3 Steps (Initial + 2 Follow-ups)" },
                { value: "4", label: "4 Steps (Full Nurture Funnel)" },
              ]}
            />
          </div>

          <Input
            label="Target Audience & Description"
            placeholder="e.g. B2B SaaS Series A companies with dated landing pages"
            value={campaignForm.description}
            onChange={(e) => setCampaignForm({ ...campaignForm, description: e.target.value })}
          />

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" icon={Send}>
              Launch Campaign
            </Button>
          </div>
        </form>
      </Modal>

      {/* 5. CREATE INVOICE MODAL */}
      <Modal
        isOpen={activeModal === "create_invoice"}
        onClose={() => setActiveModal(null)}
        title="Create New Invoice"
        subtitle="Generate milestone or retainer invoice with INR ₹ currency."
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleCreateInvoiceSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Select
              label="Select Client"
              value={invoiceForm.client}
              onChange={(e) => {
                const selected = clients.find((c) => c.name === e.target.value);
                setInvoiceForm({
                  ...invoiceForm,
                  client: e.target.value,
                  clientEmail: selected?.email || "",
                });
              }}
              options={clients.map((c) => ({ value: c.name, label: `${c.name} (${c.company})` }))}
            />
            <Input
              label="Client Billing Email"
              type="email"
              value={invoiceForm.clientEmail}
              onChange={(e) => setInvoiceForm({ ...invoiceForm, clientEmail: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Project Title"
              placeholder="e.g. Next.js Rebuild Milestone 1"
              value={invoiceForm.project}
              onChange={(e) => setInvoiceForm({ ...invoiceForm, project: e.target.value })}
            />
            <Input
              label="Amount (₹ INR)"
              type="number"
              placeholder="35000"
              value={invoiceForm.amount}
              onChange={(e) => setInvoiceForm({ ...invoiceForm, amount: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Due Date"
              placeholder="e.g. Oct 20, 2026"
              value={invoiceForm.dueDate}
              onChange={(e) => setInvoiceForm({ ...invoiceForm, dueDate: e.target.value })}
            />
            <Select
              label="Initial Status"
              value={invoiceForm.status}
              onChange={(e) => setInvoiceForm({ ...invoiceForm, status: e.target.value })}
              options={[
                { value: "Pending", label: "Pending Payment" },
                { value: "Draft", label: "Draft" },
                { value: "Paid", label: "Paid" },
              ]}
            />
          </div>

          <Input
            label="Service Deliverable Description"
            placeholder="e.g. 50% upfront deposit for sprint 1"
            value={invoiceForm.serviceDescription}
            onChange={(e) => setInvoiceForm({ ...invoiceForm, serviceDescription: e.target.value })}
          />

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" icon={FileText}>
              Generate Invoice
            </Button>
          </div>
        </form>
      </Modal>

      {/* 6. COMMAND PALETTE (⌘K) MODAL */}
      <Modal
        isOpen={activeModal === "command_k"}
        onClose={() => setActiveModal(null)}
        title="Quick Command Navigation"
        subtitle="Search pages, actions, and workspace tools."
        maxWidth="max-w-md"
      >
        <div className="space-y-3">
          <Input
            icon={Search}
            placeholder="Type a command or jump to page..."
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
            {filteredCommands.map((cmd, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveModal(null);
                  router.push(cmd.path);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left transition-colors group"
              >
                <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-500">
                  {cmd.title}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <span>{cmd.category}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ))}

            {filteredCommands.length === 0 && (
              <p className="text-xs text-slate-400 text-center py-4">
                No commands matching &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
