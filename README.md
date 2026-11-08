# Centralized Vendor Management System (VMS)

## Overview
This repository contains the source code for a full‑stack Vendor Management System built with:

- **Frontend**: React (Vite), Tailwind CSS, Recharts, Lucide React
- **Backend / BaaS**: Supabase (PostgreSQL, Auth, Storage, Row‑Level Security)

The project follows a modular, incremental development approach (Phase 1‑5) as defined in the specifications.

## Folder Structure (Phase 1)
```
/vms
├─ .gitignore                # Standard ignores + Supabase & Vite files
├─ README.md                 # This document
├─ package.json              # NPM/Yarn workspace definition
├─ vite.config.ts            # Vite configuration
├─ tailwind.config.cjs       # Tailwind configuration
├─ postcss.config.cjs        # PostCSS config for Tailwind
├─ src/                      # React source root
│   ├─ main.tsx              # App entry point
│   ├─ App.tsx               # Top‑level component with routing placeholder
│   ├─ components/           # Reusable UI components (Button, Modal, etc.)
│   └─ pages/                # Page-level components (Dashboard, VendorList…)
└─ supabase/                 # Supabase project files
    ├─ migrations/           # SQL migration scripts
    │   └─ 001_initial_schema.sql
    ├─ policies/             # RLS policies (generated later)
    └─ .env.example          # Example env for local dev (supabase URL & anon key)
```

## Setup Instructions (Phase 1)
1. **Create a Supabase project** – note the `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
2. **Clone / open this folder** in your IDE.
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run Supabase migrations** (requires the Supabase CLI):
   ```bash
   supabase db reset   # creates a local Docker DB (optional)
   supabase db push    # pushes the migration defined in `supabase/migrations/001_initial_schema.sql`
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```
6. **Open** `http://localhost:5173` – you should see a placeholder app.

Further phases will expand the schema, add RLS policies, and implement UI modules.
