import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

type Group = "Timekeeping" | "Visibility" | "Management";

type Feature = {
  slug: string;
  title: string;
  shortTitle: string;
  group: Group;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  bullets: string[];
  steps: { title: string; text: string }[];
};

const features: Feature[] = [
  {
    slug: "time-tracking",
    title: "Time Tracking",
    shortTitle: "Time Tracking",
    group: "Timekeeping",
    description:
      "Track work hours against projects in real time with the ClockMetric desktop timer.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "Start and stop timer instantly",
      "Attach tracked time to a project",
      "Shows active timer status clearly",
    ],
    steps: [
      {
        title: "Choose a project",
        text: "Employees select the project they are working on before starting the timer.",
      },
      {
        title: "Run the timer",
        text: "ClockMetric records active tracked time while the timer is running.",
      },
      {
        title: "Review tracked hours",
        text: "Admins and employees can later review tracked hours in reports and timesheets.",
      },
    ],
  },
  {
    slug: "screenshots",
    title: "Screenshots",
    shortTitle: "Screenshots",
    group: "Visibility",
    description:
      "Capture screenshots during tracked work so admins can review workflow visibility clearly.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "Random screenshots during active timer",
      "Hourly grouped screenshot view",
      "Clear review for admin and employee",
    ],
    steps: [
      {
        title: "Timer is active",
        text: "Screenshots are only captured while a user is actively tracking time.",
      },
      {
        title: "Screenshots are grouped",
        text: "Images are grouped by employee, date and hour for easy review.",
      },
      {
        title: "Review in dashboard",
        text: "Admins can quickly inspect work progress with compact screenshot cards.",
      },
    ],
  },
  {
    slug: "keyboard-activity",
    title: "Keyboard Activity",
    shortTitle: "Keyboard Activity",
    group: "Visibility",
    description:
      "Review keyboard activity intervals alongside tracked time for better workday insight.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "15-minute activity intervals",
      "Hourly grouped summaries",
      "Compact review for admins",
    ],
    steps: [
      {
        title: "Activity is collected",
        text: "Keyboard activity is measured in intervals while the timer is running.",
      },
      {
        title: "Intervals are grouped",
        text: "Intervals are grouped into compact hourly sections for easy reading.",
      },
      {
        title: "Admin reviews trends",
        text: "Admins can review activity level without needing to open every detail first.",
      },
    ],
  },
  {
    slug: "daily-ai-summaries",
    title: "Daily AI Summaries",
    shortTitle: "Daily AI Summaries",
    group: "Visibility",
    description:
      "Turn screenshots and activity into a simple daily summary of visible work patterns.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "Daily summary per employee",
      "Based on visible screenshots",
      "Clear and readable admin overview",
    ],
    steps: [
      {
        title: "Screenshots are analyzed",
        text: "ClockMetric reviews the visible work context from captured screenshots.",
      },
      {
        title: "Summary is generated",
        text: "A concise daily summary describes the employee’s visible work activity.",
      },
      {
        title: "Admin gets overview",
        text: "The summary helps admins quickly understand the day without reading every screenshot.",
      },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    shortTitle: "Projects",
    group: "Management",
    description:
      "Organize tracked time by project so work stays structured across the whole workspace.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "Create projects per workspace",
      "Assign time to the right work",
      "Keep project-based reporting organized",
    ],
    steps: [
      {
        title: "Create projects",
        text: "Admins create projects inside a workspace for employees to track against.",
      },
      {
        title: "Track against project",
        text: "Employees choose a project before starting their timer.",
      },
      {
        title: "Review by project",
        text: "Reports and dashboards can be filtered by project for better visibility.",
      },
    ],
  },
  {
    slug: "reports",
    title: "Reports",
    shortTitle: "Reports",
    group: "Management",
    description:
      "See weekly totals, project time and employee work summaries in a clean report layout.",
    primaryCta: "Start tracking time",
    secondaryCta: "Download app",
    bullets: [
      "Weekly totals",
      "Project summary breakdown",
      "Employee-friendly report layout",
    ],
    steps: [
      {
        title: "Tracked time is collected",
        text: "ClockMetric gathers all tracked work hours across the workspace.",
      },
      {
        title: "Data is summarized",
        text: "Hours are grouped by date, project and employee for easier reporting.",
      },
      {
        title: "Admins review reports",
        text: "Reports give a simple view of performance and recorded time.",
      },
    ],
  },
];

const featureMap = Object.fromEntries(features.map((f) => [f.slug, f]));

const groups: Group[] = ["Timekeeping", "Visibility", "Management"];

const groupFeatures: Record<Group, string[]> = {
  Timekeeping: ["time-tracking"],
  Visibility: ["screenshots", "keyboard-activity", "daily-ai-summaries"],
  Management: ["projects", "reports"],
};

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/app_icon.png"
        alt="ClockMetric"
        width={44}
        height={44}
        priority
      />

      <span className="text-[34px] font-extrabold tracking-[-0.04em] text-slate-950">
        ClockMetric
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 text-[17px] font-semibold text-slate-700 md:flex">
          <Link href="/" className="hover:text-slate-950">
            Platform
          </Link>
          <Link href="/" className="hover:text-slate-950">
            Features
          </Link>
          <Link href="/" className="hover:text-slate-950">
            For Teams
          </Link>
          <Link href="/" className="hover:text-slate-950">
            Pricing
          </Link>
          <Link href="/" className="hover:text-slate-950">
            Download
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-[17px] font-semibold text-slate-700">
            Log in
          </Link>
          <Link
            href="/"
            className="rounded-xl bg-orange-500 px-6 py-3 text-[16px] font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}

function DemoShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f6f8fb] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-center bg-orange-500 py-4 sm:py-5">
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
      </div>

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="mx-auto max-w-[760px]">{children}</div>
      </div>
    </div>
  );
}

function TimeTrackingDemo() {
  return (
    <DemoShell title="Time Tracker">
      <div className="rounded-[26px] border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-7 sm:py-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-orange-100">
          <div className="relative h-10 w-10 rounded-full bg-orange-500">
            <div className="absolute left-1/2 top-[7px] h-5 w-[3px] -translate-x-1/2 rounded bg-white" />
            <div className="absolute left-1/2 top-1/2 h-[3px] w-3 -translate-y-1/2 rounded bg-white" />
            <div className="absolute top-[-5px] left-1/2 h-1.5 w-6 -translate-x-1/2 rounded bg-orange-500" />
            <div className="absolute right-0 top-1 h-2 w-2 rotate-45 rounded-sm bg-orange-500" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <h4 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Timer Running
          </h4>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Screenshots may be captured while the timer is running.
          </p>
        </div>

        <div className="relative mt-7">
          <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-slate-600">
            Select Project
          </span>
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-4 w-6 skew-x-[-12deg] bg-orange-500" />
              <span className="text-2xl font-medium text-slate-400">AB</span>
            </div>
            <span className="text-slate-400">▼</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-orange-200 bg-orange-50/40 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="text-orange-500">♙</span>
            <span className="text-2xl font-bold text-slate-950">AB</span>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-extrabold text-green-600">
            ACTIVE
          </span>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-[56px] font-extrabold leading-none tracking-[-0.05em] text-slate-950 sm:text-[72px]">
            00:53:59
          </p>
          <p className="mt-4 text-xl font-semibold text-green-600">
            Tracking time now
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button className="rounded-2xl bg-slate-200 px-6 py-4 text-sm font-bold text-slate-700">
            Open Dashboard
          </button>
          <button className="rounded-2xl bg-red-500 px-6 py-4 text-sm font-bold text-white">
            Stop Timer
          </button>
        </div>
      </div>
    </DemoShell>
  );
}

function ScreenshotsDemo() {
  const items = ["8:33 PM", "8:28 PM", "8:23 PM", "8:18 PM", "8:08 PM", "8:03 PM"];

  return (
    <DemoShell title="My Screenshots">
      <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">
              E
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900">Employee</p>
              <p className="text-sm text-slate-500">Hourly screenshot review</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              September 5, 2026
            </div>
            <div className="text-xl font-bold text-slate-500">64 Screenshots</div>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <p className="text-lg font-bold text-slate-900 sm:text-xl">8 PM - 9 PM</p>
            <p className="text-base font-semibold text-slate-500">(7 screenshots)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {items.map((time, idx) => (
              <div key={idx}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-[110px] flex-col">
                    <div className="flex h-5 items-center gap-1 border-b border-slate-200 bg-slate-50 px-2">
                      <span className="h-2 w-2 rounded-full bg-red-300" />
                      <span className="h-2 w-2 rounded-full bg-yellow-300" />
                      <span className="h-2 w-2 rounded-full bg-green-300" />
                    </div>

                    <div className="flex flex-1">
                      <div className="w-[36%] bg-slate-100 p-2">
                        <div className="h-2 w-full rounded bg-orange-100" />
                        <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
                        <div className="mt-2 h-2 w-3/5 rounded bg-slate-200" />
                      </div>

                      <div className="flex-1 bg-slate-950 p-2">
                        <div className="h-2 w-4/5 rounded bg-slate-700" />
                        <div className="mt-2 h-2 w-full rounded bg-slate-800" />
                        <div className="mt-2 h-2 w-5/6 rounded bg-slate-800" />
                        <div className="mt-2 h-2 w-2/3 rounded bg-slate-800" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-orange-600">Employee</span>
                  <span className="text-slate-500">{time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function KeyboardActivityDemo() {
  const rows = [
    ["8 PM - 9 PM", "4 intervals", "1267", "2856"],
    ["7 PM - 8 PM", "2 intervals", "397", "1028"],
    ["5 PM - 6 PM", "2 intervals", "543", "1351"],
    ["1 PM - 2 PM", "3 intervals", "302", "1658"],
    ["12 PM - 1 PM", "4 intervals", "350", "2504"],
  ];

  return (
    <DemoShell title="Keyboard Activity">
      <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
        {/* DATE */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fffaf5] px-4 py-3">
          <span className="text-orange-500">‹</span>

          <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
            <span className="text-slate-500">▣</span>

            <span className="text-base font-extrabold text-slate-800">
              September 5, 2026
            </span>
          </div>

          <span className="text-slate-400">›</span>
        </div>

        {/* SUMMARY */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <span className="text-slate-500">⌨ Keyboard: </span>
            <b>3653</b>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <span className="text-slate-500">● Mouse: </span>
            <b>16138</b>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <span className="text-slate-500">☝ Total: </span>
            <b>19791</b>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <span className="text-slate-500">▤ Intervals: </span>
            <b>23</b>
          </div>

          <div className="ml-auto rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
            ▣ &nbsp; Today &nbsp; ▼
          </div>
        </div>

        {/* ACTIVITY ROWS */}
        <div className="mt-4 space-y-2">
          {rows.map(([time, intervals, keyboard, mouse]) => (
            <div
              key={time}
              className="grid grid-cols-[1fr_auto] items-center rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-3"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-orange-500">
                  ›
                </span>

                <span className="text-xl text-orange-500">
                  ◷
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-base font-semibold text-slate-800">
                    {time}
                  </span>

                  <span className="text-sm font-semibold text-slate-500">
                    ({intervals})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">⌨</span>
                  <span className="font-semibold text-slate-900">
                    {keyboard}
                  </span>
                </div>

                <div className="h-7 w-px bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span className="text-slate-500">●</span>
                  <span className="font-semibold text-slate-900">
                    {mouse}
                  </span>
                </div>

                <span className="text-orange-500">
                  ⌄
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function AISummaryDemo() {
  return (
    <DemoShell title="Daily AI Summary">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-extrabold text-slate-950">Summary Inputs</p>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600">
                AI
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {[
                "24 screenshots captured today",
                "Keyboard activity intervals grouped by hour",
                "Tracked project activity reviewed",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-extrabold text-slate-950">
                Employee Daily Summary
              </h4>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-600">
                AI SUMMARY
              </span>
            </div>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Product listing and marketplace work appeared throughout the day,
              with periods of data entry, review and project-related browser
              activity. Several consecutive screenshots showed ongoing work in
              code and browser tabs, suggesting a focused work session.
            </p>

            <button className="mt-5 text-sm font-bold text-orange-600">
              View full summary →
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function ProjectsDemo() {
  return (
    <DemoShell title="Projects">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Product Listing", "Active", "12h 20m"],
            ["Marketplace Management", "Active", "9h 45m"],
            ["Product Research", "Paused", "5h 12m"],
          ].map(([name, status, time]) => (
            <div key={name} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  PROJECT
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-bold",
                    status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-200 text-slate-600"
                  )}
                >
                  {status}
                </span>
              </div>

              <p className="mt-4 text-xl font-extrabold text-slate-950">{name}</p>
              <p className="mt-2 text-sm text-slate-500">Tracked this week</p>
              <p className="mt-1 text-2xl font-bold text-orange-600">{time}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50/50 p-4">
          <p className="text-lg font-extrabold text-slate-950">How projects help</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Employees choose a project before starting their timer, so tracked time
            remains organized and reports stay meaningful.
          </p>
        </div>
      </div>
    </DemoShell>
  );
}

function ReportsDemo() {
  const rows = [
    ["Today", "04:29:59", "Product Listing"],
    ["Yesterday", "07:26:31", "Marketplace Management"],
    ["Thu, Sep 3, 2026", "05:35:43", "Product Research"],
    ["Wed, Sep 2, 2026", "06:26:52", "Product Listing"],
  ];

  return (
    <DemoShell title="Reports">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-slate-500">This Week Total</p>
            <p className="mt-2 text-3xl font-extrabold text-slate-950">37:01:29</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">Active Projects</p>
            <p className="mt-2 text-3xl font-extrabold text-slate-950">3</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">Report Period</p>
            <p className="mt-2 text-2xl font-extrabold text-slate-950">Weekly</p>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-[1.3fr_0.7fr_1fr] bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">
            <span>Date</span>
            <span>Total</span>
            <span>Project</span>
          </div>

          {rows.map(([date, total, project]) => (
            <div
              key={date}
              className="grid grid-cols-[1.3fr_0.7fr_1fr] border-t border-slate-200 px-4 py-3 text-sm"
            >
              <span className="font-semibold text-slate-900">{date}</span>
              <span className="font-bold text-slate-900">{total}</span>
              <span className="text-slate-600">{project}</span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="mb-3 text-lg font-extrabold text-slate-900">Project Summary</p>

          {[
            ["Product Listing", "18h 24m", "72%"],
            ["Marketplace Management", "12h 40m", "52%"],
            ["Product Research", "8h 15m", "34%"],
          ].map(([name, time, width]) => (
            <div key={name} className="mb-4 last:mb-0">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">{name}</span>
                <span className="font-bold text-slate-900">{time}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-orange-500"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function renderDemo(slug: string) {
  switch (slug) {
    case "time-tracking":
      return <TimeTrackingDemo />;
    case "screenshots":
      return <ScreenshotsDemo />;
    case "keyboard-activity":
      return <KeyboardActivityDemo />;
    case "daily-ai-summaries":
      return <AISummaryDemo />;
    case "projects":
      return <ProjectsDemo />;
    case "reports":
      return <ReportsDemo />;
    default:
      return <TimeTrackingDemo />;
  }
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = featureMap[slug];

  if (!feature) {
    notFound();
  }

  const currentGroup = feature.group;
  const currentGroupSlugs = groupFeatures[currentGroup];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-2">
              {groups.map((group) => {
  const href =
    group === "Timekeeping"
      ? "/features/time-tracking"
      : group === "Visibility"
        ? "/features/screenshots"
        : "/features/projects";

  return (
    <Link
      key={group}
      href={href}
      className={cn(
        "cursor-pointer rounded-xl px-6 py-3 text-center text-base font-bold transition",
        group === currentGroup
          ? "bg-orange-50 text-orange-600"
          : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
      )}
    >
      {group}
    </Link>
  );
})}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {currentGroupSlugs.map((itemSlug) => {
                const item = featureMap[itemSlug];
                return (
                  <Link
                    key={item.slug}
                    href={`/features/${item.slug}`}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-semibold transition",
                      slug === item.slug
                        ? "border-orange-200 bg-orange-50 text-orange-600"
                        : "border-slate-200 bg-white text-slate-600 hover:text-slate-950"
                    )}
                  >
                    {item.shortTitle}
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <h1 className="text-5xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-6xl">
                {feature.title}
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-xl leading-9 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/"
                  className="rounded-2xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-orange-600"
                >
                  {feature.primaryCta} →
                </Link>

                <Link
                  href="/"
                  className="rounded-2xl border border-orange-300 bg-white px-8 py-4 text-lg font-bold text-orange-600 transition hover:bg-orange-50"
                >
                  {feature.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          {renderDemo(slug)}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
                What you get
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-slate-950">
                Built for real ClockMetric workflow.
              </h2>

              <div className="mt-8 space-y-4">
                {feature.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-semibold text-slate-700"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
                How it works
              </p>

              <div className="mt-8 space-y-4">
                {feature.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}