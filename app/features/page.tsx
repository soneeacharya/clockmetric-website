import type { Metadata } from "next";
import { DetailLayout } from "@/components/marketing/detail-layout";
import { FeatureExplorer } from "@/components/marketing/feature-explorer";
import "../marketing.css";
export const metadata: Metadata = {title: "Features | ClockMetric", description: "Explore time tracking, projects, screenshots, reports and team management."};
export default function Page(){return <DetailLayout label="Features" title="Find the tools your team needs." description="Choose a feature to see what it does and how to use it. Each feature has its own page, with examples and simple steps."><section className="cm-section"><div className="cm-container"><FeatureExplorer/></div></section></DetailLayout>}
