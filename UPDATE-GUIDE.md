# ClockMetric website update

This ZIP contains the complete Next.js project based on soneeacharya/clockmetric-website, with the requested public website changes.

## What changed
- Plain-language homepage and feature headings, with time tracking and team management alongside AI summaries.
- Direct navigation to Platform, Features, AI summaries, How it works and Pricing.
- New Platform, Features overview and FAQ pages; existing feature detail URLs retained.
- Wider responsive content area, larger navigation labels and no sliding or smooth-scroll animation.
- Two plans: A$10 without AI and A$13 with AI per approved, active employee/month. Admins excluded; 14-day trial.
- Calculator supports both plans.
- Signup and Supabase integration files remain unchanged. Existing login destination retained.

## Update your existing project
1. Back up your current project.
2. Extract the ZIP. Copy its files into your existing clockmetric-website project, preserving your .env.local file and existing deployment settings.
3. Run `npm ci`, then `npm run build`.
4. Commit the updated files to your existing GitHub repository. If Vercel is connected to that branch, the push can trigger deployment.
5. Check the deployed pages and confirm signup and login work with your real configuration.

Required existing environment variables:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

No .env.local file, credentials, node_modules or build output is included.

## Verification
- Production build and TypeScript checks passed; all 21 generated pages completed.
- Build used temporary placeholder Supabase environment values for compilation only. Real signup/login was not exercised.
- Signup and Supabase source files were compared against the original checkout and are unchanged.
- Browser visual QA was unavailable: the managed preview service passed unsupported --host and --strictPort arguments to Next.js. Check desktop and mobile appearance before deploying.
- No changes have been pushed to GitHub or deployed to clockmetric.com.
