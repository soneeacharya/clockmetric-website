import Image from "next/image";
import Link from "next/link";

const people = [
  { name: "Alex Morgan", initials: "AM", role: "Product design", hours: "32h 45m", status: "Working", width: "82%" },
  { name: "Jamie Chen", initials: "JC", role: "Development", hours: "28h 20m", status: "Working", width: "71%" },
  { name: "Sam Taylor", initials: "ST", role: "Marketing", hours: "24h 15m", status: "Offline", width: "61%" },
];
export function DashboardPreview() {
  return <figure className="cm-dashboard-frame" aria-label="Illustrative ClockMetric admin dashboard with sample data">
    <div className="cm-window-bar"><span className="cm-window-dots"><i /><i /><i /></span><span>ClockMetric / Workspace overview</span><span className="cm-demo-label">Product preview</span></div>
    <div className="cm-dashboard"><aside className="cm-dashboard-sidebar"><div className="cm-dash-brand"><Image src="/app_icon.png" alt="" width={32} height={32} /><b>ClockMetric</b></div><small>YOUR WORKSPACE</small>{[["▦", "Dashboard"], ["◷", "Timesheets"], ["▧", "Screenshots"], ["⌁", "Activities"], ["✧", "AI summary"], ["▤", "Projects"], ["♧", "Leave"], ["♙", "Employees"]].map(([icon, label], i) => <Link href={`/features/${["admin-dashboard","reports","screenshots","keyboard-activity","daily-ai-summaries","projects","leave-management","employee-management"][i]}`} className={i === 0 ? "cm-side-active" : ""} key={label}><span aria-hidden="true">{icon}</span>{label}</Link>)}<p><span className="cm-avatar">JD</span><span>Jordan Davis<small>Workspace admin</small></span></p></aside>
      <div className="cm-dashboard-main"><div className="cm-dash-welcome"><div><small>YOUR TEAM, AT A GLANCE</small><h3>A good day to do great work.</h3><p>Here’s how your team’s week is shaping up.</p></div><span className="cm-avatar">JD</span></div>
        <div className="cm-dash-stats"><div><span>Tracked this week</span><strong>85<span>h</span> 20<span>m</span></strong><small>Across 3 employees</small></div><div><span>Working now</span><strong>2 <span className="cm-live-dot" /></strong><small>1 employee offline</small></div><div><span>Active projects</span><strong>3</strong><small>One organised workspace</small></div></div>
        <div className="cm-dash-panels"><div className="cm-team-panel"><div className="cm-panel-heading"><h4>Employee weekly hours</h4><span>This week</span></div><div className="cm-table-head"><span>EMPLOYEE</span><span>TIME TRACKED</span><span>STATUS</span></div>{people.map(p => <div className="cm-person-row" key={p.name}><div><span className="cm-avatar">{p.initials}</span><span><b>{p.name}</b><small>{p.role}</small></span></div><div><b>{p.hours}</b><span className="cm-mini-bar"><i style={{width:p.width}} /></span></div><span className={`cm-status ${p.status === "Offline" ? "cm-offline" : ""}`}>{p.status}</span></div>)}</div><div className="cm-project-panel"><h4>Time by project</h4><div className="cm-donut"><div><b>85h 20m</b><span>Total this week</span></div></div><div className="cm-chart-key"><span><i />Product design</span><b>38h 30m</b><span><i />Development</span><b>30h 20m</b><span><i />Marketing</span><b>16h 30m</b></div></div></div>
        <Link href="/features/daily-ai-summaries" className="cm-dash-summary"><span className="cm-spark">✧</span><div><b>Less catching up. More moving forward.</b><p>AI work summaries bring the day’s visible activity into focus.</p></div><span aria-hidden="true">↗</span></Link>
      </div></div><figcaption>Illustrative dashboard · Sample team and data</figcaption>
  </figure>;
}
