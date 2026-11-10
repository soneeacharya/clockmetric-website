"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { featureCatalog } from "@/lib/marketing";
export const loginUrl = "https://beamish-zabaione-4dcac2.netlify.app";
const links = [["Platform", "/platform"], ["Features", "/features"], ["AI summaries", "/ai-summaries"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"]];
export function SiteHeader() {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 const ref = useRef<HTMLElement>(null);
 const button = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  const close = (event: KeyboardEvent) => { if(event.key === "Escape") { setOpen(false); button.current?.focus(); } };
  const outside = (event: PointerEvent) => { if(ref.current && !ref.current.contains(event.target as Node)) setOpen(false); };
  document.addEventListener("keydown", close); document.addEventListener("pointerdown", outside);
  return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
 }, []);
 const items = links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>);
 return <header className="cm-header" ref={ref}><div className="cm-container cm-nav"><Link href="/" className="cm-logo" aria-label="ClockMetric home"><Image src="/app_icon.png" alt="" width={36} height={36} priority/>ClockMetric<span className="cm-logo-dot">.</span></Link><nav className="cm-desktop-nav" aria-label="Main navigation">{items}</nav><div className="cm-nav-actions"><a className="cm-login" href={loginUrl}>Log in ↗</a><Link className="cm-button cm-small" href="/signup">Start free trial →</Link><button ref={button} className="cm-menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button></div></div>{open && <nav id="mobile-navigation" className="cm-mobile-nav" aria-label="Mobile navigation">{items}<a href={loginUrl}>Log in ↗</a></nav>}</header>;
}
export function SiteFooter(){return <footer className="cm-footer"><div className="cm-container"><div className="cm-footer-grid"><div><Link className="cm-logo" href="/"><Image src="/app_icon.png" alt="" width={34} height={34}/>ClockMetric<span className="cm-logo-dot">.</span></Link><p>Track work hours, manage your team and review each day in one place.</p><Link className="cm-text-link" href="/signup">Your 14-day trial starts here →</Link></div><div><h3>Track & understand</h3>{featureCatalog.slice(0,6).map(f=><Link key={f.slug} href={`/features/${f.slug}`}>{f.name}</Link>)}</div><div><h3>Manage your team</h3>{featureCatalog.slice(6).map(f=><Link key={f.slug} href={`/features/${f.slug}`}>{f.name}</Link>)}</div><div><h3>Get started</h3><Link href="/pricing">Pricing</Link><Link href="/how-it-works">How it works</Link><Link href="/faq">Your questions, answered</Link><Link href="/signup">Create your workspace</Link><a href={loginUrl}>Log in ↗</a></div></div><div className="cm-footer-bottom"><span>© {new Date().getFullYear()} ClockMetric. All rights reserved.</span><span>Remote teams. Real work. Clearer days.</span><a href="#main-content">Back to top ↑</a></div></div></footer>}
export function FinalCTA(){return <section className="cm-final-cta"><div className="cm-container"><p className="cm-eyebrow">A CLEARER WORKDAY STARTS HERE</p><h2>Ready to try ClockMetric?</h2><p>Set up your workspace and see how it fits your team.</p><Link className="cm-button" href="/signup">Start your 14-day free trial →</Link><small>From A$10 per active employee/month. With AI: A$13.</small></div></section>}
