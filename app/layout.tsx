import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://clockmetric.com"),
  title: "ClockMetric | Employee Time Tracking & AI Work Summaries",
  description:
    "ClockMetric helps remote teams track employee work hours, monitor activity, manage projects and screenshots, and understand productivity with AI-powered daily work summaries.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "ClockMetric | Track the Time. Understand the Work.",
    description:
      "Employee time tracking, screenshots, activity monitoring and AI-powered work summaries for remote teams.",
    url: "https://clockmetric.com",
    siteName: "ClockMetric",
    type: "website",
    locale: "en_AU",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
