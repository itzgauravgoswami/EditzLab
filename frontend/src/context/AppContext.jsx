"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  mockUser,
  mockKPIs,
  mockServices,
  mockLeads,
  mockContacts,
  mockCampaigns,
  mockEmails,
  mockFollowups,
  mockTemplates,
  mockClients,
  mockProjects,
  mockInvoices,
  mockRecentActivities,
  mockAutomations,
} from "@/data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Core Entities State
  const [user, setUser] = useState(mockUser);
  const [kpis, setKpis] = useState(mockKPIs);
  const [leads, setLeads] = useState(mockLeads);
  const [contacts, setContacts] = useState(mockContacts);
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [emails, setEmails] = useState(mockEmails);
  const [followups, setFollowups] = useState(mockFollowups);
  const [templates, setTemplates] = useState(mockTemplates);
  const [clients, setClients] = useState(mockClients);
  const [projects, setProjects] = useState(mockProjects);
  const [invoices, setInvoices] = useState(mockInvoices);
  const [services, setServices] = useState(mockServices);
  const [activities, setActivities] = useState(mockRecentActivities);
  const [automations, setAutomations] = useState(mockAutomations);

  // Integrations Simulated State
  const [gmailConnected, setGmailConnected] = useState(false);
  const [connectedGmailAddress, setConnectedGmailAddress] = useState("");
  const [sheetsConnected, setSheetsConnected] = useState(true);
  const [lastSheetSync, setLastSheetSync] = useState("Today, 10:30 AM");

  // UI State: Drawers & Modals
  const [activeDrawer, setActiveDrawer] = useState(null); // { type: 'lead'|'contact'|'client'|'email'|'project', data: item }
  const [activeModal, setActiveModal] = useState(null); // 'add_lead' | 'import_sheets' | 'connect_gmail' | 'create_campaign' | 'create_invoice' | 'create_template' | 'command_k'
  const [toasts, setToasts] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast notification helper
  const addToast = (message, type = "success", title = "") => {
    const id = Date.now() + Math.random().toString();
    const newToast = { id, message, type, title };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add Lead
  const addLead = (leadData) => {
    const newId = `lead-${Date.now()}`;
    const newLead = {
      id: newId,
      name: leadData.name || "Untitled Lead",
      company: leadData.company || "Independent",
      title: leadData.title || "Decision Maker",
      email: leadData.email || "",
      phone: leadData.phone || "",
      service: leadData.service || "Website Development & Headless CMS",
      status: leadData.status || "New",
      source: leadData.source || "Manual Entry",
      campaign: leadData.campaign || "Direct Inbound",
      value: Number(leadData.value) || 30000,
      lastContact: "Just now",
      nextFollowup: leadData.nextFollowup || "Tomorrow, 10:00 AM",
      followupStage: "Initial Outreach",
      notes: leadData.notes || "",
      tags: leadData.tags || ["New Prospect"],
    };

    setLeads((prev) => [newLead, ...prev]);
    setKpis((prev) => ({
      ...prev,
      totalLeads: prev.totalLeads + 1,
    }));

    // Add activity
    addActivity({
      type: "lead_added",
      title: `Lead added: ${newLead.name}`,
      subtitle: `${newLead.company} • ${newLead.service}`,
      badge: "New Lead",
      icon: "user-plus",
    });

    addToast(`Lead "${newLead.name}" added successfully`, "success", "Lead Created");
    return newLead;
  };

  // Update Lead Status
  const updateLeadStatus = (leadId, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          return { ...lead, status: newStatus, lastContact: "Just now" };
        }
        return lead;
      })
    );
    addToast(`Lead status updated to ${newStatus}`, "info", "Pipeline Updated");
  };

  // Convert Lead to Client
  const convertLeadToClient = (lead) => {
    const newClientId = `cli-${Date.now()}`;
    const newClient = {
      id: newClientId,
      name: lead.name,
      company: lead.company,
      industry: "Creative & Tech",
      email: lead.email,
      services: [lead.service],
      status: "Onboarding",
      projectsCount: 1,
      totalRevenue: lead.value,
      revenueFormatted: `₹${lead.value.toLocaleString("en-IN")}`,
      lastActivity: "Just now",
      startDate: "Today",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      notes: `Converted from lead. Original notes: ${lead.notes}`,
    };

    setClients((prev) => [newClient, ...prev]);
    updateLeadStatus(lead.id, "Won");
    setKpis((prev) => ({
      ...prev,
      activeClients: prev.activeClients + 1,
      revenue: prev.revenue + lead.value,
      revenueFormatted: `₹${(prev.revenue + lead.value).toLocaleString("en-IN")}`,
    }));

    addActivity({
      type: "client_created",
      title: `Lead converted to Client: ${lead.name}`,
      subtitle: `${lead.company} • Retainer project initiated`,
      badge: "Won Client",
      icon: "briefcase",
    });

    addToast(`${lead.name} (${lead.company}) is now an Active Client!`, "success", "Deal Won");
  };

  // Import Leads from Google Sheets (Simulated)
  const importLeadsFromSheets = (importedItems) => {
    const formatted = importedItems.map((item, index) => ({
      id: `lead-sheet-${Date.now()}-${index}`,
      name: item.name || "Prospective Lead",
      company: item.company || "Enterprise Corp",
      title: item.title || "Founder",
      email: item.email || "hello@client.com",
      phone: item.phone || "+91 98000 00000",
      service: item.service || "Website Development & Headless CMS",
      status: "New",
      source: "Google Sheets Import",
      campaign: item.campaign || "Cold Outreach Batch",
      value: item.value || 35000,
      lastContact: "Never",
      nextFollowup: "Today, 6:00 PM",
      followupStage: "Initial Outreach",
      notes: "Auto-synced from Google Sheets spreadsheet.",
      tags: ["Imported", "Sheet"],
    }));

    setLeads((prev) => [...formatted, ...prev]);
    setKpis((prev) => ({
      ...prev,
      totalLeads: prev.totalLeads + formatted.length,
    }));

    addActivity({
      type: "lead_added",
      title: `Imported ${formatted.length} leads from Google Sheets`,
      subtitle: `Batch sync completed • Campaign mapped`,
      badge: "Sheets Sync",
      icon: "file-spreadsheet",
    });

    addToast(`Successfully imported ${formatted.length} leads from Google Sheets!`, "success", "Import Complete");
  };

  // Complete Followup
  const completeFollowup = (followupId) => {
    const item = followups.find((f) => f.id === followupId);
    setFollowups((prev) =>
      prev.map((f) => (f.id === followupId ? { ...f, status: "Completed" } : f))
    );

    addActivity({
      type: "followup_completed",
      title: `Follow-up completed for ${item?.leadName || "Lead"}`,
      subtitle: `${item?.company} • ${item?.suggestedAction}`,
      badge: "Completed",
      icon: "check-circle",
    });

    addToast(`Follow-up with ${item?.company} marked as completed`, "success", "Follow-up Done");
  };

  // Add Campaign
  const addCampaign = (campData) => {
    const newCamp = {
      id: `cmp-${Date.now()}`,
      name: campData.name || "New Campaign",
      service: campData.service || "Website Development & Headless CMS",
      status: "Active",
      leadsCount: Number(campData.leadsCount) || 15,
      deliveredRate: 100,
      openedRate: 0,
      repliesCount: 0,
      repliesRate: "0.0%",
      meetingsBooked: 0,
      lastActivity: "Just now",
      sequenceSteps: Number(campData.sequenceSteps) || 3,
      description: campData.description || "Custom automated outreach sequence.",
    };

    setCampaigns((prev) => [newCamp, ...prev]);
    addToast(`Campaign "${newCamp.name}" launched successfully!`, "success", "Campaign Created");
  };

  // Add Invoice
  const addInvoice = (invData) => {
    const invoiceNum = `INV-2026-0${Math.floor(100 + Math.random() * 900)}`;
    const newInv = {
      id: invoiceNum,
      client: invData.client || "Client Co",
      clientEmail: invData.clientEmail || "accounts@client.com",
      project: invData.project || "Freelance Services",
      amount: Number(invData.amount) || 25000,
      amountFormatted: `₹${(Number(invData.amount) || 25000).toLocaleString("en-IN")}`,
      issuedDate: "Today",
      dueDate: invData.dueDate || "In 14 days",
      paidDate: null,
      status: invData.status || "Pending",
      items: [
        {
          desc: invData.serviceDescription || "Milestone Deliverable",
          qty: 1,
          rate: Number(invData.amount) || 25000,
        },
      ],
    };

    setInvoices((prev) => [newInv, ...prev]);
    if (newInv.status === "Pending") {
      setKpis((prev) => ({
        ...prev,
        pendingPayments: prev.pendingPayments + newInv.amount,
        pendingFormatted: `₹${(prev.pendingPayments + newInv.amount).toLocaleString("en-IN")}`,
      }));
    }

    addActivity({
      type: "payment_received",
      title: `Invoice ${newInv.id} issued`,
      subtitle: `${newInv.client} • ${newInv.amountFormatted}`,
      badge: "Invoice",
      icon: "file-text",
    });

    addToast(`Invoice ${newInv.id} generated for ${newInv.client}`, "success", "Invoice Created");
  };

  // Mark Invoice as Paid
  const markInvoicePaid = (invId) => {
    setInvoices((prev) =>
      prev.map((inv) => {
        if (inv.id === invId) {
          setKpis((k) => ({
            ...k,
            revenue: k.revenue + inv.amount,
            revenueFormatted: `₹${(k.revenue + inv.amount).toLocaleString("en-IN")}`,
            pendingPayments: Math.max(0, k.pendingPayments - inv.amount),
            pendingFormatted: `₹${Math.max(0, k.pendingPayments - inv.amount).toLocaleString("en-IN")}`,
          }));
          return { ...inv, status: "Paid", paidDate: "Today" };
        }
        return inv;
      })
    );

    addToast(`Invoice ${invId} marked as Paid! Revenue updated.`, "success", "Payment Received");
  };

  // Add Template
  const addTemplate = (templateData) => {
    const newTmpl = {
      id: `tmpl-${Date.now()}`,
      name: templateData.name || "Custom Template",
      category: templateData.category || "Cold Outreach",
      lastUpdated: "Today",
      usageCount: 0,
      subject: templateData.subject || "Quick note regarding {{company_name}}",
      body: templateData.body || "Hi {{first_name}},\n\nReaching out from EditzLab.\n\nBest,\nGaurav",
    };

    setTemplates((prev) => [newTmpl, ...prev]);
    addToast(`Template "${newTmpl.name}" saved!`, "success", "Template Added");
  };

  // Toggle Service
  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
    addToast("Service availability toggled", "info");
  };

  // Helper for adding general activity
  const addActivity = (act) => {
    const newAct = {
      id: `act-${Date.now()}`,
      time: "Just now",
      ...act,
    };
    setActivities((prev) => [newAct, ...prev]);
  };

  // Simulated Connect Gmail
  const connectGmail = (emailAddress) => {
    setGmailConnected(true);
    setConnectedGmailAddress(emailAddress || "gaurav@editzlab.studio");
    addToast(`Connected Gmail: ${emailAddress || "gaurav@editzlab.studio"}`, "success", "Gmail Sync Active");
  };

  const disconnectGmail = () => {
    setGmailConnected(false);
    setConnectedGmailAddress("");
    addToast("Disconnected Gmail account", "info", "Gmail Disconnected");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        kpis,
        leads,
        contacts,
        campaigns,
        emails,
        followups,
        templates,
        clients,
        projects,
        invoices,
        services,
        activities,
        automations,
        // Actions
        addLead,
        updateLeadStatus,
        convertLeadToClient,
        importLeadsFromSheets,
        completeFollowup,
        addCampaign,
        addInvoice,
        markInvoicePaid,
        addTemplate,
        toggleService,
        addActivity,
        // Integrations
        gmailConnected,
        connectedGmailAddress,
        connectGmail,
        disconnectGmail,
        sheetsConnected,
        setSheetsConnected,
        lastSheetSync,
        // UI & Modals
        activeDrawer,
        setActiveDrawer,
        activeModal,
        setActiveModal,
        toasts,
        addToast,
        removeToast,
        sidebarCollapsed,
        setSidebarCollapsed,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
