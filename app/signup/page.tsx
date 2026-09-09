"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          workspace_name: workspaceName.trim(),
          role: "admin",
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
  setSuccess(true);
}
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-5 md:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/app_icon.png"
              alt="ClockMetric"
              width={34}
              height={34}
              priority
            />

            <span className="text-lg font-extrabold tracking-[-0.03em]">
              ClockMetric
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs">
            <span className="hidden text-slate-500 sm:inline">
              Already have an account?
            </span>

            <a
              href="https://beamish-zabaione-4dcac2.netlify.app"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Log in
            </a>
          </div>
        </div>
      </header>

      {/* SIGNUP */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-6 lg:grid-cols-[1fr_440px] lg:items-center lg:py-12">
        {/* LEFT SIDE */}
        <div className="hidden lg:block">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-bold text-orange-600">
            14-day free trial
          </span>

          <h1 className="mt-5 max-w-[560px] text-4xl font-extrabold leading-[1.08] tracking-[-0.05em]">
            Start tracking your team with
            <span className="text-orange-500"> ClockMetric.</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-base leading-7 text-slate-600">
            Create your workspace today. Add employees, manage projects and
            review tracked work from one simple dashboard.
          </p>

          <div className="mt-8 space-y-4 text-sm font-medium text-slate-700">
            <div>✓ 14-day free trial</div>
            <div>✓ No credit card required</div>
            <div>✓ A$5 per active employee/month</div>
            <div>✓ Desktop screenshot and activity tracking</div>
            <div>✓ Reports and Daily AI Summaries</div>
          </div>
        </div>

        {/* SIGNUP CARD */}
        {/* SIGNUP CARD */}
{success ? (
  <div className="rounded-[22px] border border-slate-200 bg-white p-8 text-center shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
    <Image
      src="/app_icon.png"
      alt="ClockMetric"
      width={54}
      height={54}
      className="mx-auto"
    />

    <h2 className="mt-5 text-2xl font-extrabold">
      Account created
    </h2>

    <p className="mt-3 text-sm leading-6 text-slate-600">
      Please check your email and confirm your ClockMetric account.
    </p>

    <div className="mt-6 space-y-3">
      <a
        href="https://beamish-zabaione-4dcac2.netlify.app"
        className="block w-full rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-600"
      >
        Open ClockMetric
      </a>

      <a
        href="/ClockMetricSetup.exe"
        download
        className="block w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
      >
        Download Windows App
      </a>
    </div>

    <p className="mt-5 text-[11px] text-slate-400">
      Your 14-day free trial has started.
    </p>
  </div>
) : (
  <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center">
        <Image
          src="/app_icon.png"
          alt="ClockMetric"
          width={42}
          height={42}
          priority
        />
      </div>

      <h2 className="mt-3 text-xl font-extrabold">
        Create your ClockMetric account
      </h2>

      <p className="mt-1 text-[11px] text-slate-500">
        Start your 14-day free trial
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-bold text-slate-700">
          Full name
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your full name"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold text-slate-700">
          Workspace name
        </label>

        <input
          type="text"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder="Your company or team name"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold text-slate-700">
          Work email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold text-slate-700">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 8 characters"
          minLength={8}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(249,115,22,0.25)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating account..." : "Start 14-day free trial"}
      </button>
    </form>

    <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
      By continuing, you agree to ClockMetric&apos;s Terms and Privacy Policy.
    </p>

    <div className="mt-5 border-t border-slate-200 pt-4 text-center">
      <p className="text-xs text-slate-500">
        Already have an account?{" "}
        <a
          href="https://beamish-zabaione-4dcac2.netlify.app"
          className="font-bold text-orange-600"
        >
          Log in
        </a>
      </p>
    </div>
  </div>
)}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-center text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left md:px-6">
          <p>© 2026 ClockMetric. All rights reserved.</p>

          <div className="flex items-center justify-center gap-5">
            <a href="#" className="transition hover:text-orange-600">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-orange-600">
              Terms of Service
            </a>

            <a href="#" className="transition hover:text-orange-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}