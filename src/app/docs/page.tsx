import type { Metadata } from "next";
import { ChipList, CodeBlock, PageShell, Section } from "@/components/ui";
import { agents, modes, presets, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description: "Install and configure Noyap for Codex, OpenCode, Claude Code, Cursor, and more.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return (
    <PageShell>
      <Section eyebrow="docs" title="Noyap setup reference" className="pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 text-sm leading-7 text-zinc-400">
            <p>
              Install communication rules for one agent, every supported agent, or a
              directory-scoped workflow. Noyap keeps output concise while preserving
              warnings, project rules, and natural language style.
            </p>
            <div>
              <h2 className="mb-3 font-mono text-sm text-emerald-300">agents</h2>
              <ChipList items={agents} />
            </div>
            <div>
              <h2 className="mb-3 font-mono text-sm text-cyan-300">modes</h2>
              <ChipList items={modes} />
            </div>
            <div>
              <h2 className="mb-3 font-mono text-sm text-amber-300">presets</h2>
              <ChipList items={presets} />
            </div>
          </div>
          <CodeBlock
            title="commands"
            code={`npx @ppwnr88/noyap init
npx @ppwnr88/noyap init --agent codex
npx @ppwnr88/noyap init --agent opencode
npx @ppwnr88/noyap init --mode thai-dev
npx @ppwnr88/noyap doctor`}
          />
        </div>
      </Section>

      <Section eyebrow="options" title="Common configuration">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            ["Language options", "Auto-detect English, Thai, and mixed Thai/English developer language."],
            ["AGENTS.md strategy", "Use merge, separate, overwrite, or cancel for Codex and OpenCode projects."],
            ["Doctor command", "Check whether generated files and config look healthy before relying on them."],
            ["Warning preservation", "Keep security, data-loss, migration, deploy, and breaking-change warnings visible."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <h2 className="font-mono text-sm text-zinc-100">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-zinc-500">
          Full package docs live in the{" "}
          <a href={site.readme} className="text-cyan-300 hover:text-cyan-200">
            GitHub README
          </a>
          .
        </p>
      </Section>
    </PageShell>
  );
}
