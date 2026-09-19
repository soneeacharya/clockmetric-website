import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/marketing/site-header";
import "./marketing.css";
export default function NotFound(){return <div className="cm-site"><SiteHeader/><main id="main-content" className="cm-section cm-warm"><div className="cm-container cm-section-heading"><p className="cm-eyebrow">404 · PAGE NOT FOUND</p><h1 style={{fontSize:"clamp(38px,6vw,64px)"}}>Let’s get you back on track.</h1><p style={{margin:"24px auto"}}>This page isn’t available. Explore ClockMetric’s features or head back home.</p><Link href="/" className="cm-button">Back to ClockMetric →</Link><p><Link href="/#features" className="cm-text-link">Explore the platform ↗</Link></p></div></main><SiteFooter/></div>}
