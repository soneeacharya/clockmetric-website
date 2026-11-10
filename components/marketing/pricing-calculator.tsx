"use client";
import { useState } from "react";
export function PricingCalculator() {
 const [employees, setEmployees] = useState(10);
 const [ai, setAi] = useState(false);
 const rate = ai ? 13 : 10;
 return <div className="cm-calculator"><label htmlFor="plan-choice">Choose your plan</label><select id="plan-choice" value={ai ? "with_ai" : "without_ai"} onChange={e => setAi(e.target.value === "with_ai")}><option value="without_ai">Without AI — A$10 / employee</option><option value="with_ai">With AI — A$13 / employee</option></select><label htmlFor="employee-count">Active employees <strong>{employees}</strong></label><div className="cm-count-control"><button aria-label="Remove one active employee" disabled={employees <= 1} onClick={() => setEmployees(n => n - 1)}>−</button><input id="employee-count" type="range" min="1" max="100" value={employees} onChange={e => setEmployees(Number(e.target.value))}/><button aria-label="Add one active employee" disabled={employees >= 100} onClick={() => setEmployees(n => n + 1)}>+</button></div><div><span>Estimated monthly total</span><output htmlFor="employee-count plan-choice" aria-live="polite">A${employees * rate}<small> / month</small></output></div><p>{employees} active {employees === 1 ? "employee" : "employees"} × A${rate} per month</p></div>;
}
