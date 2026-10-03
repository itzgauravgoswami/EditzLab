"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import {
  Layers,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  Briefcase,
  AlertCircle,
  Eye,
} from "lucide-react";

export default function ProjectsPage() {
  const { projects, setActiveDrawer } = useApp();
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.status === filter
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "blue";
      case "Review":
        return "purple";
      case "Planning":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Project Management"
        description="Monitor active deliverables, client milestones, production sprints, and project timelines."
        breadcrumbs={["Business", "Projects"]}
        actionLabel="New Project"
        onAction={() => alert("Simulated: Create project modal opened.")}
        actionIcon={Plus}
      />

      {/* Status Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {["All", "In Progress", "Review", "Planning", "Completed"].map((st) => (
          <button
            key={st}
            onClick={() => setFilter(st)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              filter === st
                ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveDrawer({ type: "project", data: project })}
              className="group p-5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs hover:shadow-sm cursor-pointer space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {project.client}
                  </p>
                </div>
                <Badge variant={getStatusBadge(project.status)} size="sm" dot>
                  {project.status}
                </Badge>
              </div>

              {/* Service & Scope */}
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Milestone Progress</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer with Budget & Deadline */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">
                  {project.budgetFormatted}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.deadline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Layers}
          title="No projects in this category"
          description="Create a project to begin tracking sprint milestones and task deliverables."
        />
      )}
    </div>
  );
}
