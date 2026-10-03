# EditzLab — Creative Studio & Business Operating System

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express](https://img.shields.io/badge/Express-5.2-lightgrey?style=for-the-badge&logo=express)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**EditzLab** is a modern, full-stack digital creative agency platform and end-to-end freelance business operating system. Built for digital creators, creative studios, and solo founders, it combines a client-facing showcase website with a management dashboard to handle client acquisition, email outreach, project pipelines, and invoicing.

---

## 🌟 Key Features

### 1. Client-Facing Creative Studio Experience (`/`)
- **Cinematic Canvas Engine**: High-performance, 30fps 300-frame sequential canvas video player (`BackgroundVideo.jsx`) featuring background frame preloading via `requestIdleCallback`.
- **Editorial Typography & Luxury Aesthetic**: Curated font pairing using `Playfair Display` (editorial serif), `Plus Jakarta Sans` (modern UI sans), and `JetBrains Mono` (technical mono) atop an ambient dark surface (`#070A11`).
- **Interactive Particle & Ambient Lighting**: Floating bokeh lights, subtle mesh grids, and glassmorphic pill badges with live ratings.
- **Dynamic 6-Tier Infinite Tickers**: Continuous marquee bars highlighting key studio verbs across *Innovation, Strategy, Execution, Synergy, Craft,* and *Automation*.
- **Comprehensive Capability Showcase**:
  - Web Development & Headless CMS
  - 4K Commercial Video Editing & Motion
  - High-End Product & Commercial Photography
  - Brand Identity & Visual Guidelines
  - Targeted Social Media & Content Strategy
  - Conversion Ad Creatives & Motion Graphics
- **Transparent Service Catalog**: Service cards with transparent base pricing, delivery turnarounds, and interactive inquiry drawers.
- **Lead Capture & Project Onboarding**: Instant project request drawers and interactive kickoff modals for seamless client conversions.

---

### 2. Studio Operating System & Admin Suite (`/admin`)
A centralized management dashboard tailored for freelance studios:

- **Workspace Overview**: Real-time KPI metrics tracking total leads, email outreach velocity, reply rates, active clients, monthly revenue, and pending balances.
- **Leads Pipeline (`/admin/leads`)**: Kanban and list view managing leads through various stages (*New*, *Contacted*, *Qualified*, *Proposal Sent*, *Won/Lost*).
- **Contacts Management (`/admin/contacts`)**: Complete CRM directory of client stakeholders, marketing leads, and partners.
- **Outreach Campaigns (`/admin/campaigns`)**: Cold email campaign tracker measuring open rates, response rates, and deliverability.
- **Outreach Emails (`/admin/emails`)**: Granular sequence logs and chronological delivery timelines for outgoing client proposals.
- **Smart Follow-Up Queue (`/admin/followups`)**: Intelligent agenda categorizing follow-ups by urgency (*Today*, *Upcoming*, *Completed*) with quick-action statuses.
- **Email Templates Library (`/admin/templates`)**: Pre-configured high-converting cold email scripts, contract follow-ups, and invoice reminders.
- **Workflow Automations (`/admin/automations`)**: Automated event triggers for lead nurturing, follow-up scheduling, and payment reminders.
- **Client Directory (`/admin/clients`)**: Comprehensive client records detailing active agreements, lifetime spend, and project history.
- **Project Tracker (`/admin/projects`)**: Milestone tracking, deliverable deadlines, stage flags (*In Progress*, *Review*, *Completed*), and budget allocation.
- **Invoicing & Billing (`/admin/invoices`)**: Invoice lifecycle tracker (*Paid*, *Pending*, *Overdue*) with currency support (`INR ₹`) and payment due dates.
- **Service Offerings (`/admin/services`)**: Configurable studio service catalog with base prices, turnaround SLAs, and active project counts.
- **Performance Analytics (`/admin/analytics`)**: Interactive visual analytics powered by **Recharts**, graphing monthly revenue trends, lead source breakdowns, and pipeline conversions.
- **Studio Settings (`/admin/settings`)**: Configurable workspace settings, profile customization, and notification preferences.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.3.8](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19.2.8](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts & Data Viz**: [Recharts](https://recharts.org/)
- **Fonts**: `next/font/google` (`Playfair Display`, `Plus Jakarta Sans`, `JetBrains Mono`)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Server Framework**: [Express 5.2.1](https://expressjs.com/)
- **Development Tooling**: [Nodemon](https://nodemon.io/)

---

## 📁 Repository Structure

```text
EditzLab/
├── backend/                  # Express REST API backend
│   ├── index.js              # Express 5 API server & route handlers
│   ├── package.json          # Express & Nodemon dependencies
│   ├── .env.example          # Backend environment variables template
│   └── .gitignore
│
├── frontend/                 # Next.js 16 frontend & client dashboard
│   ├── public/               # Public assets, static frames & images
│   │   ├── Frames/           # 300 sequential frames for cinematic canvas player
│   │   ├── features/         # Showcase photography & service imagery
│   │   └── editzlab-logo.png # Studio brand mark
│   │
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   │   ├── admin/        # Studio OS / Admin suite pages
│   │   │   │   ├── analytics/
│   │   │   │   ├── automations/
│   │   │   │   ├── campaigns/
│   │   │   │   ├── clients/
│   │   │   │   ├── contacts/
│   │   │   │   ├── emails/
│   │   │   │   ├── followups/
│   │   │   │   ├── invoices/
│   │   │   │   ├── leads/
│   │   │   │   ├── projects/
│   │   │   │   ├── services/
│   │   │   │   ├── settings/
│   │   │   │   ├── templates/
│   │   │   │   ├── layout.js # Admin shell layout (sidebar, topbar)
│   │   │   │   └── page.js   # Admin dashboard overview
│   │   │   ├── layout.js     # Global root layout & canvas video injection
│   │   │   ├── not-found.js  # Custom 404 Route Not Found page
│   │   │   ├── page.js       # Client-facing landing page
│   │   │   └── globals.css   # Tailwind v4 theme directives & utilities
│   │   │
│   │   ├── components/       # Reusable UI & section components
│   │   │   ├── admin/        # Admin Sidebar & Topbar
│   │   │   ├── brand/        # Logo and typography marks
│   │   │   ├── common/       # Button, Input, Modal, Badge, StatCard, Canvas
│   │   │   ├── drawers/      # Slide-over drawers (e.g. Service Requests)
│   │   │   ├── landing/      # Hero, Features, Workflow, Services, Tickers, Footer
│   │   │   └── modals/       # Interactive dialogs (Add Lead, Project, Invoice)
│   │   │
│   │   ├── context/          # React Context API (AppContext.jsx)
│   │   └── data/             # Centralized mock data & domain models
│   │
│   ├── .env.example          # Frontend environment variables template
│   ├── package.json          # Next.js 16, React 19, Tailwind v4
│   └── postcss.config.mjs    # PostCSS Tailwind configuration
│
├── .gitignore                # Root gitignore rules
├── CONTRIBUTING.md           # Developer & contribution guidelines
├── LICENSE                   # MIT License
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm** or **yarn** / **pnpm**

---

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd EditzLab
   ```

2. **Setup Frontend**:
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**:
   ```bash
   cd ../backend
   npm install
   ```

---

### Running the Application

#### Start Frontend (Next.js with Turbopack)
```bash
cd frontend
npm run dev
```
The application will launch at:
- **Public Showcase**: [http://localhost:3000](http://localhost:3000)
- **Studio Admin Suite**: [http://localhost:3000/admin](http://localhost:3000/admin)

#### Start Backend (Express API)
```bash
cd backend
npm run dev  # or node index.js
```

---

## 🎨 UI/UX Design System
- **Dark Mode Surface**: Base `#070A11` with semi-transparent frosted cards (`backdrop-blur-2xl`).
- **Brand Accents**: Vibrant electric blues (`#2563eb`, `#38bdf8`) paired with neon status indicators.
- **Glassmorphic Depth**: Multi-layered border strokes (`border-white/10`) and subtle interior drop-shadows.
- **Typography Scale**: High-contrast serif headlines paired with ultra-clean modern sans-serif body copy.

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute according to the terms of the license.
