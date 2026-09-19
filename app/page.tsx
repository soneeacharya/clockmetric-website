import type { ReactNode } from "react";
import Link from "next/link";

import {
  SiteHeader,
  SiteFooter,
} from "@/components/marketing/site-header";

import { DashboardPreview } from "@/components/marketing/dashboard-preview";

import { PricingCalculator } from "@/components/marketing/pricing-calculator";

import {
  AISummaryPreview,
  TimerPreview,
  ScreenshotPreview,
  ReportPreview,
  LeavePreview,
} from "@/components/marketing/product-demo";

import { FeatureExplorer } from "@/components/marketing/feature-explorer";

import "./marketing.css";


const faqs: [string, string][] = [
  [
    "What is ClockMetric?",
    "ClockMetric is an employee time-tracking platform for remote teams. It brings project-based time tracking, screenshots, activity monitoring, timesheets, reports and team management into one workspace.",
  ],
  [
    "How does the 14-day free trial work?",
    "Create your ClockMetric account to start a 14-day free trial. Set up your workspace, add employees and projects, and explore the tracking and reporting workflow. The ongoing price is A$10 per active employee per month.",
  ],
  [
    "How much will my team pay?",
    "ClockMetric costs A$10 per active employee per month. For example, 10 active employees cost A$100 per month. Use the pricing calculator above to estimate the cost for your team.",
  ],
  [
    "Do employees and admins use the same app?",
    "Employees use the Windows desktop tracker to choose a project and start or stop their timer. Admins use the web dashboard to review team time, activity, screenshots and reports, and manage their workspace.",
  ],
  [
    "When are screenshots and activity recorded?",
    "Automatic/random screenshots and keyboard activity monitoring run during tracked work sessions. Activity is organised into intervals, alongside screenshots and recorded time, so it can be reviewed in context.",
  ],
  [
    "What do AI work summaries show?",
    "AI work summaries describe observable work from captured screenshots and activity. They help admins review a workday more quickly. Review them alongside the underlying records for a fuller picture.",
  ],
  [
    "How does ClockMetric track employee activity?",
    "ClockMetric tracks working time, keyboard and mouse activity, project usage, and captures periodic screenshots while an employee’s timer is running. This gives managers a clear view of how work time is being used.",
  ],
  [
    "What are ClockMetric AI Work Summaries?",
    "ClockMetric uses AI to turn captured work activity into simple, readable summaries. Admins can quickly understand what employees worked on without manually reviewing every screenshot.",
  ],
];


function Checks({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="cm-checks">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}


function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="cm-arrow-link">
      {children}
      <span aria-hidden="true"> →</span>
    </Link>
  );
}


export default function Home() {
  return (
    <div className="cm-site">
      <a
        className="cm-skip"
        href="#main-content"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">

        {/* HERO */}
        <section className="cm-hero cm-new-hero">
          <div className="cm-container">

            <div className="cm-hero-layout">

              <div className="cm-hero-copy">

                <Link
                  href="/features/daily-ai-summaries"
                  className="cm-pill"
                >
                  ✧ &nbsp; Meet your workday, summarised
                  <span>→</span>
                </Link>

                <h1>
                  Track the time.
                  <br />
                  Understand
                  <br />
                  <span>the work.</span>
                </h1>

                <p className="cm-hero-description">
                  Hours tell you how long.{" "}
                  <strong>
                    AI summaries help you see the story.
                  </strong>{" "}
                  Connect time, screenshots and activity in one clear
                  view of your remote team&apos;s day.
                </p>

                <div className="cm-hero-actions">
                  <Link
                    href="/signup"
                    className="cm-button"
                  >
                    Start your free trial →
                  </Link>

                  <a
                    href="#product-preview"
                    className="cm-button cm-button-secondary"
                  >
                    Explore the demo ↘
                  </a>
                </div>

                <p className="cm-hero-note">
                  <span>✓ 14-day free trial</span>
                  <span>
                    ✓ A$10 / active employee / month
                  </span>
                </p>

                <div className="cm-hero-proof">

                  <span className="cm-overlap-avatars">
                    <i>AM</i>
                    <i>JC</i>
                    <i>ST</i>
                  </span>

                  <span>
                    Built for the people
                    <br />
                    <b>behind every project.</b>
                  </span>

                </div>

              </div>


              <div
                id="product-preview"
                className="cm-hero-product"
              >

                <AISummaryPreview />

                <div className="cm-hero-sticker">

                  <span>✧</span>

                  <div>
                    <b>
                      A day of detail. A moment of clarity.
                    </b>

                    <small>
                      Time tracking meets AI work summaries.
                    </small>
                  </div>

                </div>

              </div>

            </div>


            <div className="cm-platform-strip">

              <span>
                ONE WORKSPACE. FROM FIRST TIMER TO FINAL
                SUMMARY.
              </span>

              <div>

                <Link href="/features/time-tracking">
                  ◷ &nbsp; Track time
                </Link>

                <Link href="/features/screenshots">
                  ▧ &nbsp; See the context
                </Link>

                <Link href="/features/daily-ai-summaries">
                  ✧ &nbsp; Read the summary
                </Link>

                <Link href="/features/employee-management">
                  ♙ &nbsp; Support your team
                </Link>

              </div>

            </div>

          </div>
        </section>


        {/* AI SUMMARIES */}
        <section
          id="ai-summaries"
          className="cm-section cm-ai-section"
        >

          <div className="cm-container cm-split">

            <div className="cm-feature-copy">

              <p className="cm-eyebrow">
                01 / AI WORK SUMMARIES
              </p>

              <h2>
                A full workday.
                <br />
                A clearer read.
              </h2>

              <p>
                Turn captured work context into a simple,
                readable overview. AI-generated summaries help
                admins catch up on visible activity without
                opening every screenshot.
              </p>

              <Checks
                items={[
                  "Plain-language summaries of observable work",
                  "Time and work context in one view",
                  "A starting point for your daily review",
                ]}
              />

              <ArrowLink href="/features/daily-ai-summaries">
                Meet your daily overview
              </ArrowLink>

            </div>

            <AISummaryPreview />

          </div>

        </section>


        {/* ABOUT */}
        <section className="cm-section cm-about">

          <div className="cm-container cm-about-grid">

            <div>

              <p className="cm-eyebrow">
                WHAT IS CLOCKMETRIC?
              </p>

              <h2>
                Remote work.
                <br />
                A shared understanding.
              </h2>

            </div>


            <div>

              <p className="cm-lead">
                ClockMetric brings AI work summaries to employee
                time tracking, helping remote teams understand
                the work behind their recorded hours.
              </p>

              <p>
                Employees track their work with a simple desktop
                app. Admins get a connected view of hours,
                screenshots, activity and reports in their
                browser. Less piecing things together. More time
                to move work forward.
              </p>

              <ArrowLink href="#how-it-works">
                Meet your new everyday workspace
              </ArrowLink>

            </div>

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="cm-section cm-warm"
        >

          <div className="cm-container">

            <div className="cm-section-heading">

              <p className="cm-eyebrow">
                FROM FIRST CLICK TO FULL PICTURE
              </p>

              <h2>
                A simple rhythm for your workday.
              </h2>

              <p>
                Easy for employees to use. Clear for admins to
                review.
              </p>

            </div>


            <div className="cm-steps">

              {[
                [
                  "01",
                  "Set up your workspace",
                  "Create your account, add your employees and organise the projects your team works on.",
                ],
                [
                  "02",
                  "Let the workday begin",
                  "Employees choose a project and start the desktop timer. Time, screenshots and activity stay connected.",
                ],
                [
                  "03",
                  "See the bigger picture",
                  "Open your web dashboard to review timesheets, weekly reports and AI-generated work summaries.",
                ],
              ].map(([n, title, text]) => (
                <article key={n}>

                  <span className="cm-step-number">
                    {n}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* FEATURES */}
        <section
          id="features"
          className="cm-section"
        >

          <div className="cm-container">

            <div className="cm-heading-row">

              <div>

                <p className="cm-eyebrow">
                  ONE CONNECTED PLATFORM
                </p>

                <h2>
                  AI summaries first.
                  <br />
                  Everything connected.
                </h2>

              </div>


              <p>
                Time tracking, screenshots and activity provide
                the context. AI work summaries help you make
                sense of the day.
              </p>

            </div>

            <FeatureExplorer />

          </div>

        </section>


        {/* TIME TRACKING */}
        <section
          id="time-tracking"
          className="cm-section cm-feature-section"
        >

          <div className="cm-container cm-split">

            <div className="cm-feature-copy">

              <p className="cm-eyebrow">
                02 / TIME &amp; PROJECT TRACKING
              </p>

              <h2>
                Start the timer.
                <br />
                Get into your flow.
              </h2>

              <p>
                Give every work session a home. Employees choose
                their project, start tracking and get on with
                their day. Their hours stay connected to the
                work that matters.
              </p>

              <Checks
                items={[
                  "Simple start and stop desktop timer",
                  "Tracked time organised by project",
                  "Personal timesheets for employees",
                ]}
              />

              <ArrowLink href="/features/time-tracking">
                Explore time tracking
              </ArrowLink>

            </div>

            <TimerPreview />

          </div>

        </section>


        {/* SCREENSHOTS */}
        <section
          id="screenshots-activity"
          className="cm-section cm-feature-section"
        >

          <div className="cm-container cm-split cm-reverse">

            <div className="cm-feature-copy">

              <p className="cm-eyebrow">
                03 / SCREENSHOTS &amp; ACTIVITY
              </p>

              <h2>
                Context behind
                <br />
                the clock.
              </h2>

              <p>
                Recorded hours tell part of the story.
                Automatic/random screenshots and keyboard
                activity intervals help you understand the work
                happening during tracked sessions.
              </p>

              <Checks
                items={[
                  "Screenshots grouped for easier review",
                  "Keyboard activity in 15-minute intervals",
                  "Employee and admin views of tracked work",
                ]}
              />

              <ArrowLink href="/features/screenshots">
                Explore screenshots
              </ArrowLink>

              <ArrowLink href="/features/keyboard-activity">
                See activity monitoring
              </ArrowLink>

            </div>

            <ScreenshotPreview />

          </div>

        </section>


        {/* ADMIN DASHBOARD */}
        <section
          id="admin-dashboard"
          className="cm-section"
        >

          <div className="cm-container">

            <div className="cm-section-heading">

              <p className="cm-eyebrow">
                04 / THE ADMIN DASHBOARD
              </p>

              <h2>
                Your team. Your projects.
                <br />
                Your view of the day.
              </h2>

              <p>
                A web dashboard that brings working status,
                employee hours and project time together,
                wherever you manage your team.
              </p>

            </div>


            <div
              id="platform"
              className="cm-admin-preview"
            >
              <DashboardPreview />
            </div>


            <div className="cm-admin-cards">

              <article>

                <span className="cm-icon-box">
                  ♙
                </span>

                <h3>
                  Know who&apos;s working
                </h3>

                <p>
                  Working and offline indicators put your
                  team&apos;s current status within reach.
                </p>

                <div className="cm-person-status">

                  <span className="cm-avatar">
                    AM
                  </span>

                  <b>Alex Morgan</b>

                  <span className="cm-status">
                    Working
                  </span>

                </div>


                <div className="cm-person-status">

                  <span className="cm-avatar">
                    ST
                  </span>

                  <b>Sam Taylor</b>

                  <span className="cm-status cm-offline">
                    Offline
                  </span>

                </div>

              </article>


              <article>

                <span className="cm-icon-box">
                  ▥
                </span>

                <h3>
                  Understand the week
                </h3>

                <p>
                  See employee totals and how recorded hours
                  compare with the previous week.
                </p>

                <div className="cm-week-stats">

                  <div>
                    <small>This week</small>
                    <strong>85h 20m</strong>
                  </div>

                  <div>
                    <small>Previous week</small>
                    <strong>80h 10m</strong>
                  </div>

                </div>

                <span className="cm-example-label">
                  Sample weekly totals
                </span>

              </article>


              <article>

                <span className="cm-icon-box">
                  ▤
                </span>

                <h3>
                  Keep projects connected
                </h3>

                <p>
                  Review time across your projects and
                  understand where the workday goes.
                </p>

                {[
                  ["Website redesign", "65%"],
                  ["Development", "85%"],
                  ["Marketing", "45%"],
                ].map(([name, width]) => (
                  <div
                    className="cm-project-progress"
                    key={name}
                  >

                    <span>{name}</span>

                    <div>
                      <i
                        style={{
                          width,
                        }}
                      />
                    </div>

                  </div>
                ))}

              </article>

            </div>

          </div>

        </section>


        {/* REPORTS */}
        <section
          id="timesheets-reports"
          className="cm-section cm-warm"
        >

          <div className="cm-container cm-split">

            <div className="cm-feature-copy">

              <p className="cm-eyebrow">
                05 / TIMESHEETS &amp; WEEKLY REPORTS
              </p>

              <h2>
                From daily details
                <br />
                to weekly perspective.
              </h2>

              <p>
                Bring your tracked hours into an organised view.
                Review employee time, follow project totals and
                make weekly check-ins more informed.
              </p>

              <Checks
                items={[
                  "Daily and weekly tracked-time totals",
                  "Time grouped by employee and project",
                  "An accessible record of the working week",
                ]}
              />

              <ArrowLink href="/features/reports">
                Explore timesheets &amp; reports
              </ArrowLink>

            </div>

            <ReportPreview />

          </div>

        </section>


        {/* TEAM MANAGEMENT */}
        <section
          id="teams"
          className="cm-section"
        >

          <div className="cm-container cm-team-management">

            <div id="leave-management">

              <p className="cm-eyebrow">
                06 / LEAVE &amp; EMPLOYEE MANAGEMENT
              </p>

              <h2>
                People first.
                <br />
                Everything in place.
              </h2>

              <p>
                Keep employee management and leave alongside
                your team&apos;s working time. One workspace
                gives admins a more connected picture of the
                people behind the projects.
              </p>

              <div className="cm-management-points">

                <div>

                  <h3>
                    Leave management
                  </h3>

                  <p>
                    Review employee leave in the same workspace
                    you use to manage the working week.
                  </p>

                </div>


                <div>

                  <h3>
                    Employee management
                  </h3>

                  <p>
                    Organise your employees and keep their
                    tracked work connected to your team.
                  </p>

                </div>

              </div>

              <ArrowLink href="/features/leave-management">
                Explore leave management
              </ArrowLink>

              <ArrowLink href="/features/employee-management">
                Meet your team workspace
              </ArrowLink>

            </div>

            <LeavePreview />

          </div>

        </section>


        {/* USE CASES */}
        <section className="cm-section cm-use-cases">

          <div className="cm-container">

            <div className="cm-section-heading">

              <p className="cm-eyebrow">
                BUILT AROUND YOUR EVERYDAY WORK
              </p>

              <h2>
                Different teams.
                <br />
                The same need for clarity.
              </h2>

              <p>
                From product listings to product launches, keep
                the workday connected.
              </p>

            </div>


            <div className="cm-use-grid">

              {[
                [
                  "01",
                  "Ecommerce & virtual assistants",
                  "Bring listing work, marketplace operations and customer support into one daily overview.",
                  "daily-ai-summaries",
                ],
                [
                  "02",
                  "Agencies & client teams",
                  "Organise recorded hours by project and make weekly client-work reviews easier.",
                  "projects",
                ],
                [
                  "03",
                  "Remote & distributed teams",
                  "Keep an eye on availability and understand the day across a team working apart.",
                  "admin-dashboard",
                ],
              ].map(([n, title, copy, slug]) => (
                <Link
                  key={n}
                  href={`/features/${slug}`}
                >

                  <span>{n} /</span>

                  <h3>{title}</h3>

                  <p>{copy}</p>

                  <b>
                    Explore your workflow ↗
                  </b>

                </Link>
              ))}

            </div>

          </div>

        </section>


        {/* PRICING */}
        <section
          id="pricing"
          className="cm-section cm-pricing-section"
        >

          <div className="cm-container">

            <div className="cm-section-heading">

              <p className="cm-eyebrow">
                SIMPLE, TEAM-FRIENDLY PRICING
              </p>

              <h2>
                Big-picture clarity.
                <br />
                Small per-person price.
              </h2>

              <p>
                One plan for a more connected workday.
              </p>

            </div>


            <div className="cm-pricing-card">

              <div className="cm-price-main">

                <span className="cm-tag">
                  CLOCKMETRIC
                </span>

                <div className="cm-price">

                  A$10

                  <span>
                    per active employee
                    <br />
                    per month
                  </span>

                </div>

                <p>
                  Start with a 14-day free trial and explore
                  ClockMetric with your team.
                </p>

                <Link
                  href="/signup"
                  className="cm-button"
                >
                  Start your 14-day free trial{" "}
                  <span>→</span>
                </Link>

                <PricingCalculator />

              </div>


              <div className="cm-price-includes">

                <h3>
                  Your whole workspace, connected.
                </h3>

                <Checks
                  items={[
                    "Employee & project-based time tracking",
                    "Windows desktop employee tracker",
                    "Automatic/random screenshots",
                    "Keyboard & activity monitoring",
                    "Web admin dashboard & employee status",
                    "Timesheets & weekly reports",
                    "AI-generated work summaries",
                    "Leave, employee & project management",
                  ]}
                />

              </div>

            </div>

          </div>

        </section>


        {/* DESKTOP */}
        <section
          id="download"
          className="cm-section cm-desktop-section"
        >

          <div className="cm-container cm-desktop-content">

            <span
              className="cm-desktop-icon"
              aria-hidden="true"
            >
              ▣
            </span>


            <div>

              <p className="cm-eyebrow">
                DESKTOP FOR EMPLOYEES. WEB FOR ADMINS.
              </p>

              <h2>
                Two ways in. One connected team.
              </h2>

              <p>
                Employees track on Windows. Admins review and
                manage in their browser.
              </p>

            </div>


            <Link
              href="/signup"
              className="cm-button cm-button-secondary"
            >
              Set up your workspace →
            </Link>

          </div>

        </section>


        {/* FAQ */}
        <section
          id="faq"
          className="cm-section"
        >

          <div className="cm-container cm-faq-layout">

            <div>

              <p className="cm-eyebrow">
                GOOD QUESTIONS. CLEAR ANSWERS.
              </p>

              <h2>
                A few things
                <br />
                you might wonder.
              </h2>

              <p>
                Get to know ClockMetric before your first tracked
                hour.
              </p>

            </div>


            <div className="cm-faq-list">

              {faqs.map(([q, a]) => (
                <details key={q}>

                  <summary>
                    {q}
                    <span aria-hidden="true">
                      +
                    </span>
                  </summary>

                  <p>{a}</p>

                </details>
              ))}

            </div>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="cm-final-cta">

          <div className="cm-container">

            <p className="cm-eyebrow">
              YOUR NEXT CHAPTER OF TEAMWORK
            </p>

            <h2>
              Your team&apos;s workday.
              <br />
              Clearly summarised.
            </h2>

            <p>
              Bring time, activity and AI work summaries into one
              connected workspace.
            </p>

            <Link
              href="/signup"
              className="cm-button"
            >
              Start your 14-day free trial{" "}
              <span>→</span>
            </Link>

            <small>
              A$10 per active employee/month after your trial.
            </small>

          </div>

        </section>

      </main>

      <SiteFooter />

    </div>
  );
}