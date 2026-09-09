import Image from "next/image";

const loginUrl = "https://beamish-zabaione-4dcac2.netlify.app";

const features = [
  {
    title: "Time Tracking",
    text: "Track employee work time against projects with a simple desktop timer.",
    icon: "◷",
    href: "/features/time-tracking",
  },
  {
    title: "Screenshots",
    text: "Capture screenshots during tracked time for better workday visibility.",
    icon: "▣",
    href: "/features/screenshots",
  },
  {
    title: "Keyboard Activity",
    text: "Review activity intervals alongside tracked working hours.",
    icon: "⌨",
    href: "/features/keyboard-activity",
  },
  {
    title: "Daily AI Summaries",
    text: "Turn screenshots and activity into a clear daily work overview.",
    icon: "AI",
    href: "/features/daily-ai-summaries",
  },
  {
    title: "Projects",
    text: "Organize employee time around the projects your team works on.",
    icon: "◆",
    href: "/features/projects",
  },
  {
    title: "Reports",
    text: "Review employee and project time through simple reports.",
    icon: "▥",
    href: "/features/reports",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-5 md:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/app_icon.png"
              alt="ClockMetric"
              width={34}
              height={34}
              priority
            />

            <span className="text-lg font-extrabold tracking-[-0.03em]">
              ClockMetric
            </span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="#platform"
              className="px-3 py-2 text-xs font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Platform
            </a>

            <a
              href="#features"
              className="px-3 py-2 text-xs font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Features
            </a>

            <a
              href="#teams"
              className="px-3 py-2 text-xs font-semibold text-slate-700 transition hover:text-orange-600"
            >
              For Teams
            </a>

            <a
              href="#pricing"
              className="px-3 py-2 text-xs font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Pricing
            </a>

            <a
              href="#download"
              className="px-3 py-2 text-xs font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Download
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={loginUrl}
              className="hidden px-3 py-2 text-xs font-bold text-slate-700 transition hover:text-orange-600 sm:inline-flex"
            >
              Log in
            </a>

            <a
              href="https://beamish-zabaione-4dcac2.netlify.app"
              className="rounded-lg bg-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-[0_6px_18px_rgba(249,115,22,0.22)] transition hover:bg-orange-600"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-orange-100/40 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-11 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-bold text-orange-600">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Smarter team time tracking
          </div>

          <h1 className="mx-auto mt-5 max-w-[900px] text-[46px] font-extrabold leading-[1.02] tracking-[-0.05em] md:text-[58px]">
            Track time. Understand work.
            <span className="text-orange-500"> Grow teams.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-600">
            Track hours, projects, screenshots and activity while managers get
            clear reports and Daily AI Summaries from one simple workspace.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/signup"
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-orange-500 px-7 text-sm font-bold text-white shadow-[0_9px_25px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Start free for 14 days
            </a>

            <a
              href="/ClockMetricSetup.exe"
              download
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-950 text-[11px] text-white">
                ⊞
              </span>

              Download for Windows
            </a>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] text-slate-500">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ A$5 per active employee/month</span>
          </div>

          {/* =================================================
              YOUR REAL DASHBOARD PREVIEW
          ================================================= */}
          <div id="platform" className="relative mx-auto mt-9 max-w-[1120px]">
            <div className="absolute left-1/2 top-10 h-[350px] w-[820px] -translate-x-1/2 rounded-full bg-orange-200/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#f7f8fa] shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              {/* WINDOW TOP */}
              <div className="flex h-8 items-center justify-between border-b border-slate-200 bg-white px-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/app_icon.png"
                    alt="ClockMetric"
                    width={17}
                    height={17}
                  />

                  <span className="text-[8px] font-semibold text-slate-600">
                    ClockMetric
                  </span>
                </div>

                <div className="flex gap-4 text-[8px] text-slate-500">
                  <span>—</span>
                  <span>□</span>
                  <span>×</span>
                </div>
              </div>

              <div className="grid min-h-[520px] grid-cols-[195px_1fr]">
                {/* =========================================
                    LEFT SIDEBAR
                ========================================= */}
                <aside className="relative border-r border-slate-200 bg-white px-4 py-5 text-left">
                  <div className="mb-7 text-center">
                    {/* YOUR REAL APP LOGO */}
                    <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center">
                      <Image
                        src="/app_icon.png"
                        alt="ClockMetric app logo"
                        width={62}
                        height={62}
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-3 text-[15px] font-extrabold text-slate-900">
                      ClockMetric
                    </p>

                    <p className="mt-1 text-[9px] text-slate-400">
                      ClockMetric Test Company
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 rounded-xl bg-orange-100 px-4 py-3 text-[10px] font-bold text-orange-600">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                        ▦
                      </span>
                      Dashboard
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 text-[10px] font-semibold text-slate-700">
                      <span className="text-slate-400">◷</span>
                      Timer
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 text-[10px] font-semibold text-slate-700">
                      <span className="text-slate-400">▤</span>
                      Timesheet
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 text-[10px] font-semibold text-slate-700">
                      <span className="text-slate-400">▣</span>
                      Screenshots
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 text-[10px] font-semibold text-slate-700">
                      <span className="text-slate-400">⌨</span>
                      Keyboard Activity
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3 text-[10px] font-semibold text-slate-700">
                      <span className="text-slate-400">◒</span>
                      Leave
                    </div>
                  </div>

                  <div className="absolute right-4 top-4 text-sm text-slate-400">
                    ‹
                  </div>
                </aside>

                {/* =========================================
                    MAIN DASHBOARD
                ========================================= */}
                <div className="bg-[#f8f9fb] p-5">
                  {/* WELCOME */}
                  <div className="rounded-[18px] border border-orange-200 bg-[#fff8f1] px-6 py-5 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[20px] font-extrabold text-slate-950">
                          Good Evening, sita 👋
                        </h3>

                        <p className="mt-2 text-[11px] text-slate-500">
                          ClockMetric Test Company
                        </p>

                        <div className="mt-4 flex gap-2">
                          <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-medium text-slate-600">
                            ▣ Sep 5, 2026
                          </span>

                          <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-medium text-slate-600">
                            ◷ 8:07 PM
                          </span>
                        </div>
                      </div>

                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                        S
                      </div>
                    </div>
                  </div>

                  {/* CURRENT TIMER */}
                  <div className="mt-4 flex items-center justify-between rounded-[14px] border border-orange-300 bg-[#fffaf5] px-5 py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                        ■
                      </div>

                      <div>
                        <p className="text-[14px] font-extrabold text-slate-900">
                          AB
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          sita
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <p className="font-mono text-[17px] font-extrabold text-orange-500">
                        00:28:41
                      </p>

                      <button className="rounded-full bg-orange-500 px-5 py-2.5 text-[10px] font-bold text-white">
                        Open Timer
                      </button>
                    </div>
                  </div>

                  {/* WEEK TOTAL */}
                  <div className="mt-4 overflow-hidden rounded-[14px] border border-slate-200 bg-white text-left">
                    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                      <p className="text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                        This Week Total
                      </p>

                      <p className="text-[13px] font-extrabold text-slate-900">
                        37:01:29
                      </p>
                    </div>

                    {[
                      ["TODAY", "04:29:59"],
                      ["YESTERDAY", "07:26:31"],
                      ["THU, SEP 3, 2026", "05:35:43"],
                      ["WED, SEP 2, 2026", "06:26:52"],
                      ["TUE, SEP 1, 2026", "06:12:36"],
                    ].map(([day, total]) => (
                      <div
                        key={day}
                        className="flex items-center justify-between border-b border-slate-200 bg-[#fffaf5] px-5 py-3.5 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-orange-500">
                            ›
                          </span>

                          <span className="text-slate-400">▣</span>

                          <span className="text-[10px] font-semibold text-slate-800">
                            {day}
                          </span>
                        </div>

                        <span className="text-[10px] font-semibold text-slate-900">
                          {total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section
        id="features"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              ClockMetric features
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
              Everything your team needs
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              One workspace for tracking time, reviewing work and managing your
              team.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, index) => (
    <a
      key={feature.title}
      href={feature.href}
      className={`group block cursor-pointer rounded-2xl border p-5 transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg ${
        index === 3
          ? "border-orange-200 bg-orange-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold ${
          index === 3
            ? "bg-orange-500 text-white"
            : "bg-slate-950 text-white"
        }`}
      >
        {feature.icon}
      </div>

      <h3 className="mt-4 text-base font-extrabold transition group-hover:text-orange-600">
        {feature.title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {feature.text}
      </p>

      <p className="mt-4 text-xs font-bold text-orange-500">
        See how it works →
      </p>
    </a>
  ))}
</div>
        </div>
      </section>

      {/* =====================================================
          TEAMS
      ===================================================== */}
      <section id="teams" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-6">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              For your whole team
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              The right view for every role
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-[9px] font-bold uppercase text-orange-500">
                Employees
              </p>

              <h3 className="mt-3 text-lg font-extrabold">
                Track work
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Start timers, choose projects and review personal tracked time.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-[9px] font-bold uppercase text-orange-400">
                Managers
              </p>

              <h3 className="mt-3 text-lg font-extrabold">
                Understand work
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Review time, screenshots, activity, reports and AI summaries.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-[9px] font-bold uppercase text-orange-500">
                Admins
              </p>

              <h3 className="mt-3 text-lg font-extrabold">
                Manage everything
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Manage employees, projects, workspace settings and billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
      ===================================================== */}
      <section
        id="pricing"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 md:px-6">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              Simple pricing
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Pay only for active employees
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
            <div className="p-7">
              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[9px] font-bold uppercase text-orange-600">
                ClockMetric Standard
              </span>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-extrabold">
                  A$5
                </span>

                <span className="pb-1 text-xs text-slate-500">
                  / active employee / month
                </span>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-600">
                Start with a 14-day free trial.
              </p>

              <a
                href="/signup"
                className="mt-6 inline-flex rounded-lg bg-orange-500 px-6 py-3 text-xs font-bold text-white hover:bg-orange-600"
              >
                Start free for 14 days
              </a>

              <p className="mt-2 text-[9px] text-slate-400">
                No credit card required
              </p>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-7 lg:border-l lg:border-t-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Everything included
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Desktop time tracking",
                  "Project tracking",
                  "Random screenshots",
                  "Keyboard activity",
                  "Daily & weekly timesheets",
                  "Daily AI Summaries",
                  "Reports",
                  "Leave management",
                  "Workspace management",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[9px] font-bold text-orange-600">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOWNLOAD CTA
      ===================================================== */}
      <section id="download" className="bg-white px-5 py-8 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[24px] bg-slate-950 px-7 py-9 text-white">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                ClockMetric Desktop
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Ready to start tracking?
              </h2>

              <p className="mt-3 text-xs text-slate-400">
                Download ClockMetric for Windows and start tracking your
                workday.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="/signup"
                className="rounded-lg bg-orange-500 px-6 py-3 text-xs font-bold text-white"
              >
                Start free
              </a>

              <a
                href="/ClockMetricSetup.exe"
                download
                className="rounded-lg border border-slate-700 px-6 py-3 text-xs font-bold"
              >
                ⊞ Download for Windows
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/app_icon.png"
              alt="ClockMetric"
              width={28}
              height={28}
            />

            <span className="text-sm font-extrabold">
              ClockMetric
            </span>
          </div>

          <p className="text-[9px] text-slate-400">
            © 2026 ClockMetric. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}