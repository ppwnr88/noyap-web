import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { agents, navItems, site } from "@/lib/site";

type CodeBlockProps = {
  code: string;
  title?: string;
  language?: string;
  compact?: boolean;
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06080d]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-emerald-400/30 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.12)]">
            ny
          </span>
          <span className="font-mono text-sm font-semibold tracking-wide text-zinc-100">
            Noyap
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <MobileMenu />
          <a
            href={site.github}
            className="rounded-md border border-white/10 px-3 py-2 font-mono text-xs text-zinc-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const links = [
    ["GitHub", site.github],
    ["npm", site.npm],
    ["README", site.readme],
    ["License", site.license],
  ];

  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-mono">Created by ppwnr88</p>
        <div className="flex flex-wrap gap-4">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-emerald-300">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070b] text-zinc-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function TerminalPanel({
  children,
  title = "noyap",
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-[#0a0d14]/95 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function CodeBlock({ code, title, language = "bash", compact }: CodeBlockProps) {
  return (
    <TerminalPanel title={title ?? language}>
      <pre
        className={`overflow-x-auto p-5 font-mono text-sm leading-7 text-zinc-200 ${compact ? "sm:text-xs" : ""}`}
      >
        <code>{code}</code>
      </pre>
    </TerminalPanel>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  newTab = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  newTab?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "border-emerald-300/40 bg-emerald-300/15 text-emerald-100 shadow-[0_0_35px_rgba(52,211,153,0.16)] hover:bg-emerald-300/20"
      : "border-white/10 bg-white/[0.03] text-zinc-200 hover:border-cyan-300/30 hover:bg-cyan-300/10";

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-md border px-4 py-3 font-mono text-sm transition ${classes}`}
    >
      {children}
      {newTab ? <ExternalLinkIcon /> : null}
    </a>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 text-emerald-300"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 14L14 6M8 6H14V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeatureCard({
  title,
  children,
  accent = "emerald",
}: {
  title: string;
  children: React.ReactNode;
  accent?: "emerald" | "cyan" | "amber" | "purple";
}) {
  const colors = {
    emerald: "text-emerald-300 border-emerald-300/20",
    cyan: "text-cyan-300 border-cyan-300/20",
    amber: "text-amber-300 border-amber-300/20",
    purple: "text-purple-300 border-purple-300/20",
  };

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-lg shadow-black/20">
      <div className={`mb-4 w-fit rounded border px-2 py-1 font-mono text-xs ${colors[accent]}`}>
        {title}
      </div>
      <div className="text-sm leading-7 text-zinc-400">{children}</div>
    </div>
  );
}

export function AgentCard({ name }: { name: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-[#0b0f17] px-4 py-3 font-mono text-sm text-zinc-200 transition hover:border-emerald-300/30 hover:bg-emerald-300/10">
      <span className="mr-2 text-emerald-300">$</span>
      {name}
    </div>
  );
}

export function BeforeAfter({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  return (
    <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">{label}</p>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-md border border-rose-300/15 bg-rose-300/[0.04] p-4">
          <p className="mb-2 font-mono text-xs text-rose-200">before</p>
          <p className="text-sm leading-7 text-zinc-400">{before}</p>
        </div>
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
          <p className="mb-2 font-mono text-xs text-emerald-200">after</p>
          <p className="text-sm leading-7 text-zinc-100">{after}</p>
        </div>
      </div>
    </div>
  );
}

export function BenchmarkCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0b0f17] p-5">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-4 font-mono text-3xl font-semibold text-emerald-300">{value}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-500">{detail}</p>
    </div>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <TerminalPanel title="ready">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 font-mono text-sm text-emerald-300">noyap init</p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">
              Install concise agent rules in one command.
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Start with safe defaults, then tune by agent, language, mode, or preset.
            </p>
          </div>
          <CodeBlock code="npx @ppwnr88/noyap init" title="shell" compact />
        </div>
      </TerminalPanel>
    </section>
  );
}

export function AgentGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {agents.map((agent) => (
        <AgentCard key={agent} name={agent} />
      ))}
    </div>
  );
}

export function ChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-sm text-zinc-200"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
