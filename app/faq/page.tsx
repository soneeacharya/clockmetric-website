import type { Metadata } from "next";
import { DetailLayout, Questions } from "@/components/marketing/detail-layout";
import { faqs } from "@/lib/marketing";
import "../marketing.css";
export const metadata: Metadata = {title:"Frequently Asked Questions | ClockMetric"};
export default function Page(){return <DetailLayout label="Common questions" title="What would you like to know?" description="Quick answers about time tracking, screenshots, pricing and getting started."><Questions items={faqs}/></DetailLayout>}
