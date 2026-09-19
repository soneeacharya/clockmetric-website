# ClockMetric website — AI-first redesign

A complete Next.js source project. Homepage and 10 feature pages use ClockMetric orange, warm backgrounds, product mockups and original copy, with AI work summaries as the lead benefit. All original routes remain available.

## Open on Windows

1. Extract the ZIP. Open the `clockmetric` folder containing package.json.
2. Copy `.env.local` from your existing working project into this folder. Do not share or commit it. Alternatively copy `.env.example` to `.env.local` and enter your real public Supabase values.
3. Open a terminal in this folder and run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production verification, run `npm run build`, then `npm start`.

Use Node.js 22 or 24. Verification used Node 24. Existing dependency versions and lock file are unchanged.

## Deploy to Vercel

1. Back up your current project, then copy the delivered source into your existing Git repository. Keep your existing environment files and any extra assets, especially your desktop installer.
2. Commit and push. Import the repository into Vercel, or redeploy your existing Vercel project.
3. Set Root Directory to the folder containing package.json (`clockmetric` if the ZIP parent was committed). Choose the Next.js preset.
4. Set Install Command to `npm ci`, Build Command to `npm run build`. Leave Output Directory at the framework default.
5. Set these environment variables in Vercel for Preview and Production using the values from your existing working app:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
6. Deploy. Public variables are built into the client bundle, so redeploy after changing them. Do not use a Supabase service-role or secret key in public variables.
7. Check the Vercel preview on mobile and desktop and test signup with your own account. Keep your existing Supabase Auth Site URL and confirmation/redirect destinations; update them only if your intended auth destination changes.
8. Connect your domain to the verified Vercel deployment.

Official reference: https://vercel.com/docs/frameworks/full-stack/nextjs

## Interactive elements

- Platform menu, mobile navigation and Escape-to-close controls
- AI summary preview: three employees, summary/work-record views
- Feature category filters and linked feature cards
- Start/stop demo timer and project selection
- Screenshot selection and context panel
- Expandable 15-minute activity groups on activity feature page
- Weekly report switcher and employee leave previews
- Pricing slider and increment/decrement controls
- Expandable FAQs, section links and signup CTAs

All previews use labelled sample data. The public demos do not track visitors, call AI, write employee records or simulate a live production account.

## Preserved

Byte-for-byte unchanged: `lib/supabase.ts`, `app/globals.css`, `package.json`, `package-lock.json`.

The original login destination is retained: https://beamish-zabaione-4dcac2.netlify.app

Original feature slugs retained: `time-tracking`, `screenshots`, `keyboard-activity`, `daily-ai-summaries`, `projects`, `reports`.

Added feature slugs: `admin-dashboard`, `leave-management`, `employee-management`, `desktop-tracker`. These use the existing `/features/[slug]` route.

## Before launch

- Add your real Windows installer at `public/ClockMetricSetup.exe`. The recovered source does not include it, but the unchanged signup success screen already links to it. Preserve this asset if it exists in your working project.
- The unchanged signup footer contains placeholder privacy, terms and contact links. Supply approved destinations before public launch. No policy terms were invented.
- No live signup was submitted. Auth delivery, database provisioning, billing and AI backend operation require your deployed environment and were not independently verified.
- Browser visual/interaction QA could not run in this environment (Chromium graphics initialization failed). Responsive breakpoints and interactions are implemented; check the Vercel preview before launch.
- No deployment was performed. The ZIP is ready to import/build with your existing environment values.

See CHANGES.md for the exact file list and VERIFICATION.md for checks.

Pricing update: A$10 per active employee/month. Signup pricing text changed; auth logic unchanged. Calculator uses employee count × 10.

## Detailed navigation pages

Added `/ai-summaries`, `/how-it-works`, and `/pricing`, plus `components/marketing/detail-layout.tsx`. Updated the three header links and footer destinations. Platform menu implementation is unchanged. Existing feature routes remain available. Pricing stays A$10 per active employee/month with a 14-day trial.
