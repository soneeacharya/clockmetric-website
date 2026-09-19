import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClockMetric | Time Tracking & AI Work Summaries",
  description: "Track the time. Understand the work. ClockMetric connects employee time tracking, screenshots and AI work summaries for remote teams. A$10 per active employee/month. 14-day free trial.",
  openGraph: {
    title: "ClockMetric | Track the time. Understand the work.",
    description: "AI work summaries, project time tracking and team visibility. One connected workspace for your remote team.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
