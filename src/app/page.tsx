import type { Metadata } from "next";
import Link from "next/link";
import {
  Receipt,
  CloudCog,
  LineChart,
  Network,
  Terminal,
  Router,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Raynet | Precision RADIUS & Billing" },
  description:
    "Cloud-hosted RADIUS server. Zero infrastructure. Infinite scalability. The high-performance engine for modern ISP billing and bandwidth orchestration.",
};

export default function LandingPage() {
  return (
    <div className="landing bg-surface text-on-surface selection:bg-primary/10">
      {/* ── Nav ── */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-slate-900">
            Raynet
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a
              className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1 text-sm tracking-tight"
              href="#features"
            >
              Infrastructure
            </a>
            <a
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-tight"
              href="#comparison"
            >
              Security
            </a>
            <a
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-tight"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-tight"
              href="#"
            >
              Docs
            </a>
          </div>

          <Link
            href="/register"
            className="bg-primary text-on-primary px-5 py-2 text-sm font-semibold rounded hover:bg-primary-container transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="architectural-grid">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.05]">
              Cloud-hosted <br />
              <span className="text-primary">RADIUS</span> server.
            </h1>
            <p className="text-xl text-on-surface-variant font-medium max-w-lg leading-relaxed">
              Zero infrastructure. Infinite scalability. The high-performance
              engine for modern ISP billing and bandwidth orchestration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/register"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-sm tracking-tight shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all"
              >
                Deploy Instance Now
              </Link>
              <Link
                href="#"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold text-sm tracking-tight hover:bg-surface-container-high transition-all"
              >
                View Documentation
              </Link>
            </div>
          </div>

          {/* Network Status Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-2xl">
              {/* Card header */}
              <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Live Traffic Control
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-surface-container-highest" />
                  <div className="w-3 h-3 rounded-full bg-surface-container-highest" />
                </div>
              </div>
              {/* Bar chart mockup */}
              <div className="p-0 bg-white">
                <div className="h-48 w-full flex items-end px-1 pt-4 overflow-hidden">
                  {[20, 35, 45, 42, 60, 85, 75, 90, 65, 55, 70].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/10 border-t-2 border-primary mx-[1px]"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
              {/* Terminal log */}
              <div className="p-6 bg-slate-900 font-mono text-[11px] text-blue-400/80 leading-relaxed overflow-hidden">
                <div className="flex gap-4">
                  <span className="text-slate-500">22:41:04</span>
                  <span>AUTH_SUCCESS user_id:8829 nas:ap-nyc-01</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">22:41:05</span>
                  <span>ACCOUNTING_START dev:mikrotik bytes:0</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">22:41:08</span>
                  <span className="text-primary">
                    COA_REQUEST update_speed profile:gold
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500">22:41:09</span>
                  <span>QUERY_DB latency:2ms cache:hit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] md:grid-rows-2 gap-6 md:h-[600px]">
            {/* Automated Billing */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-all">
              <div>
                <Receipt className="text-primary mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Automated Billing
                </h3>
                <p className="text-sm text-on-surface-variant font-medium">
                  Generate, invoice, and collect payments without lifting a
                  finger.
                </p>
              </div>
              <div className="mt-8 bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
                    Invoice #8841
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold uppercase rounded">
                    Paid
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-bold tracking-tighter tabular-nums">
                    $124.50
                  </div>
                  <div className="text-[10px] text-outline font-mono">
                    15 OCT 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Bandwidth Control */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-all">
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Bandwidth Control
                </h3>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-3xl font-bold text-primary tabular-nums">
                    99.9%
                  </span>
                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase">
                    QoS Lock
                  </span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-outline">
                  <span>0 GB</span>
                  <span>1000 GB</span>
                </div>
              </div>
            </div>

            {/* Zero Config Infrastructure */}
            <div className="md:col-span-1 md:row-span-2 bg-primary text-on-primary p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-all">
              <div className="space-y-4">
                <CloudCog className="w-10 h-10" />
                <h3 className="text-2xl font-bold tracking-tight">
                  Zero Config Infrastructure
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Skip the server hardening, patching, and scaling. We handle
                  the RADIUS core so you can focus on growth.
                </p>
              </div>
              <div className="mt-12 relative flex justify-center py-8">
                <svg
                  className="w-full h-auto max-w-[120px]"
                  fill="none"
                  viewBox="0 0 100 120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    height="20"
                    rx="2"
                    stroke="white"
                    strokeDasharray="4 4"
                    strokeWidth="2"
                    width="80"
                    x="10"
                    y="10"
                  />
                  <path d="M50 30V50" stroke="white" strokeWidth="2" />
                  <rect
                    fill="white"
                    fillOpacity="0.2"
                    height="50"
                    rx="4"
                    width="50"
                    x="25"
                    y="50"
                  />
                  <rect
                    fill="white"
                    height="30"
                    rx="2"
                    width="30"
                    x="35"
                    y="60"
                  />
                </svg>
              </div>
            </div>

            {/* Real-time Analytics */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col md:flex-row gap-8 hover:translate-y-[-2px] transition-all">
              <div className="flex-1">
                <LineChart className="text-primary mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-on-surface-variant font-medium">
                  Precise tracking of data consumption and subscriber behavior.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-3 bg-surface-container-low rounded border border-outline-variant/10 text-center">
                    <div className="text-xs text-outline mb-1">Peak Load</div>
                    <div className="font-bold tabular-nums">4.2 Gbps</div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded border border-outline-variant/10 text-center">
                    <div className="text-xs text-outline mb-1">
                      Active Users
                    </div>
                    <div className="font-bold tabular-nums">12.4k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section
          id="comparison"
          className="max-w-7xl mx-auto px-6 py-32 border-t border-outline-variant/20"
        >
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Engineered for Precision
            </h2>
            <p className="text-on-surface-variant max-w-2xl font-medium">
              Compare the architectural differences between traditional RADIUS
              deployments and the Raynet distributed system.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-outline-variant/30 bg-surface-container-lowest">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="py-5 px-8 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Feature
                  </th>
                  <th className="py-5 px-8 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Legacy RADIUS
                  </th>
                  <th className="py-5 px-8 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Raynet Core
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  [
                    "Deployment Time",
                    "2-3 Weeks (Hardware)",
                    "Instant (Docker + Cloud)",
                  ],
                  [
                    "Database Engine",
                    "Single Node MySQL",
                    "Cloud PostgreSQL + Prisma ORM",
                  ],
                  [
                    "API Connectivity",
                    "SOAP / Local File",
                    "REST API (Next.js Routes)",
                  ],
                  [
                    "Billing Automation",
                    "Manual Scripts",
                    "Automated Invoicing + Razorpay",
                  ],
                  [
                    "Security",
                    "User Managed",
                    "RBAC (7 Roles) + Encrypted Sessions",
                  ],
                ].map(([feature, legacy, cloud]) => (
                  <tr key={feature}>
                    <td className="py-6 px-8 text-sm font-semibold">
                      {feature}
                    </td>
                    <td className="py-6 px-8 text-sm text-outline">{legacy}</td>
                    <td className="py-6 px-8 text-sm font-bold text-primary">
                      {cloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="bg-surface-container-high rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Network className="w-48 h-48" />
            </div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-6">
              Ready to scale your network?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg font-medium">
              Join 500+ ISPs globally managing over 2 million endpoints with
              zero infrastructure overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-primary text-on-primary px-10 py-5 rounded-lg font-bold shadow-xl shadow-primary/20 hover:bg-primary-container transition-all"
              >
                Start Free Trial
              </Link>
              <button className="bg-surface-container-lowest text-on-surface border border-outline-variant/30 px-10 py-5 rounded-lg font-bold hover:bg-white transition-all">
                Book Technical Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full px-8 py-12 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black tracking-tighter text-slate-900 mb-6">
              Raynet
            </div>
            <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed mb-4">
              Precision-engineered bandwidth and billing orchestration for
              modern internet providers.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-blue-700 mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-blue-700 mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-opacity hover:underline decoration-blue-500 underline-offset-4"
                  href="#"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-6 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
            &copy; {new Date().getFullYear()} Raynet Systems. Engineered
            for Precision.
          </p>
          <div className="flex gap-6">
            <Terminal className="text-slate-400 w-4 h-4" />
            <Router className="text-slate-400 w-4 h-4" />
            <Shield className="text-slate-400 w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
