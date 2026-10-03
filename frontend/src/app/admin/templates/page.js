"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import EmptyState from "@/components/common/EmptyState";
import {
  FileCode2,
  Plus,
  Copy,
  Check,
  Eye,
  Edit3,
  Sparkles,
  Search,
} from "lucide-react";

export default function TemplatesPage() {
  const { templates, addTemplate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTemplate, setActiveTemplate] = useState(templates[0]);
  const [editorMode, setEditorMode] = useState(false);

  // Editor states
  const [subjectEdit, setSubjectEdit] = useState(activeTemplate?.subject || "");
  const [bodyEdit, setBodyEdit] = useState(activeTemplate?.body || "");
  const [copied, setCopied] = useState(false);

  const categories = [
    "All",
    "Cold Outreach",
    "Follow-up",
    "Proposal",
    "Payment",
    "Onboarding",
    "Project Completion",
  ];

  const variables = [
    { tag: "{{first_name}}", label: "First Name", sample: "Aarav" },
    { tag: "{{company_name}}", label: "Company", sample: "ABC Technologies" },
    { tag: "{{service}}", label: "Service", sample: "Website Development" },
    { tag: "{{website}}", label: "Website", sample: "abctech.io" },
    { tag: "{{custom_message}}", label: "Custom Message", sample: "Loved your recent product update." },
  ];

  const handleSelectTemplate = (tmpl) => {
    setActiveTemplate(tmpl);
    setSubjectEdit(tmpl.subject);
    setBodyEdit(tmpl.body);
    setEditorMode(false);
  };

  const handleInsertVariable = (variableTag) => {
    setBodyEdit((prev) => prev + " " + variableTag);
  };

  // Render simulated preview replacing variables with sample values
  const getRenderedPreview = (text) => {
    if (!text) return "";
    let rendered = text;
    variables.forEach((v) => {
      rendered = rendered.replaceAll(v.tag, v.sample);
    });
    return rendered;
  };

  const handleCopyBody = () => {
    navigator.clipboard?.writeText(getRenderedPreview(bodyEdit));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTemplates = templates.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Email Template Library"
        description="High-converting sequence templates with dynamic variable tags and live prospect preview."
        breadcrumbs={["Workspace", "Templates"]}
        actionLabel="New Template"
        onAction={() => {
          setActiveTemplate({
            id: `new-${Date.now()}`,
            name: "New Custom Template",
            category: "Cold Outreach",
            subject: "Quick note for {{first_name}}",
            body: "Hi {{first_name}},\n\nReaching out regarding {{service}} at {{company_name}}.\n\nBest,\nGaurav",
          });
          setSubjectEdit("Quick note for {{first_name}}");
          setBodyEdit("Hi {{first_name}},\n\nReaching out regarding {{service}} at {{company_name}}.\n\nBest,\nGaurav");
          setEditorMode(true);
        }}
        actionIcon={Plus}
      />

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Template List + Live Editor & Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Templates Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTemplates.map((t) => (
            <div
              key={t.id}
              onClick={() => handleSelectTemplate(t)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                activeTemplate?.id === t.id
                  ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-500/50 ring-1 ring-blue-500/30"
                  : "bg-white dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </h4>
                <Badge variant="neutral" size="sm">
                  {t.category}
                </Badge>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                {t.subject}
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Updated: {t.lastUpdated}</span>
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  {t.usageCount} sends
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Template Editor & Live Preview (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-5 shadow-2xs space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{activeTemplate?.name}</span>
                <Badge variant="blue" size="sm">{activeTemplate?.category}</Badge>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Dynamic Variables supported. Preview updates in real-time.
              </p>
            </div>

            <Button
              size="sm"
              variant="outline"
              icon={copied ? Check : Copy}
              onClick={handleCopyBody}
            >
              {copied ? "Copied!" : "Copy Output"}
            </Button>
          </div>

          {/* Quick Insert Variable Tags */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Insert Variable Tag:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {variables.map((v) => (
                <button
                  key={v.tag}
                  onClick={() => handleInsertVariable(v.tag)}
                  className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] hover:bg-blue-600 hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
                  title={`Sample: ${v.sample}`}
                >
                  {v.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Inputs */}
          <div className="space-y-3">
            <Input
              label="Subject Line"
              value={subjectEdit}
              onChange={(e) => setSubjectEdit(e.target.value)}
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Body
              </label>
              <textarea
                rows={6}
                value={bodyEdit}
                onChange={(e) => setBodyEdit(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-3 text-xs font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Live Preview Box */}
          <div className="p-4 bg-slate-50 dark:bg-[#070A11] rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-blue-500" />
                Live Preview (Aarav Sharma @ ABC Technologies)
              </span>
              <Badge variant="purple" size="sm">Rendered</Badge>
            </div>

            <p className="text-xs font-semibold text-slate-900 dark:text-white pt-1">
              Subject: {getRenderedPreview(subjectEdit)}
            </p>

            <div className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed pt-1">
              {getRenderedPreview(bodyEdit)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
