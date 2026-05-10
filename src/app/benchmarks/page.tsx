import type { Metadata } from "next";
import { BenchmarkCard, CodeBlock, PageShell, Section } from "@/components/ui";
import { benchmarkCards, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Benchmarks",
  description: "Noyap benchmark overview for token reduction, character reduction, line reduction, and warning preservation.",
  alternates: { canonical: "/benchmarks" },
};

export default function BenchmarksPage() {
  return (
    <PageShell>
      <Section eyebrow="benchmarks" title="Benchmark suite results" className="pt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benchmarkCards.map((card) => (
            <BenchmarkCard key={card.label} {...card} />
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
          The repository benchmark uses fixed baseline and Noyap-mode responses.
          Token counts use gpt-tokenizer. Meaning, warning, and language checks are
          heuristic, so flagged or critical cases still deserve human review.
        </p>
      </Section>

      <Section eyebrow="measured" title="What the benchmark measures">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            "token reduction",
            "character reduction",
            "line reduction",
            "meaning preservation",
            "warning preservation",
            "Thai and English quality checks",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 font-mono text-sm text-zinc-200">
              <span className="text-emerald-300">✔</span> {item}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="repo files" title="Benchmark artifacts">
        <CodeBlock
          title="github"
          code={`summary.md  ${site.benchmarkSummary}
results.json ${site.benchmarkResults}
cases.json   ${site.benchmarkCases}`}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-cyan-300 hover:bg-cyan-300/10" href={site.benchmarkSummary}>
            summary.md
          </a>
          <a className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-cyan-300 hover:bg-cyan-300/10" href={site.benchmarkResults}>
            results.json
          </a>
          <a className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-cyan-300 hover:bg-cyan-300/10" href={site.benchmarkCases}>
            cases.json
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
