import {
  AgentGrid,
  BenchmarkCard,
  BeforeAfter,
  ButtonLink,
  CTA,
  ChipList,
  CodeBlock,
  FeatureCard,
  PageShell,
  Section,
  TerminalPanel,
} from "@/components/ui";
import { benchmarkCards, modes, presets, site } from "@/lib/site";

const thaiTerms = [
  "deploy ยังไง",
  "cache ค้าง",
  "build fail",
  "query ช้า",
  "route ชน",
  "token หมด",
];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-5 font-mono text-sm text-emerald-300">$ npx @ppwnr88/noyap init</p>
            <h1 className="text-6xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
              Noyap
            </h1>
            <p className="mt-5 font-mono text-2xl text-cyan-200">{site.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Multilingual communication rules for AI coding agents.
            </p>
            <p className="mt-4 max-w-xl text-zinc-500">
              AI coding agents talk too much. Noyap makes them concise, code-first,
              multilingual, and safer for real developer workflows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/install">Get started</ButtonLink>
              <ButtonLink href={site.github} variant="secondary">
                GitHub
              </ButtonLink>
              <ButtonLink href={site.npm} variant="secondary">
                npm
              </ButtonLink>
            </div>
          </div>

          <TerminalPanel title="iterm - noyap init" className="self-center">
            <div className="p-5 font-mono text-sm leading-7">
              <p>
                <span className="text-emerald-300">➜</span>{" "}
                <span className="text-zinc-200">npx @ppwnr88/noyap init</span>
              </p>
              <div className="mt-5 space-y-2 text-zinc-300">
                <p><span className="text-emerald-300">✔</span> Generated AGENTS.md</p>
                <p><span className="text-emerald-300">✔</span> Thai-native mode enabled</p>
                <p><span className="text-emerald-300">✔</span> Safe merge strategy enabled</p>
              </div>
              <div className="mt-6 rounded-md border border-white/10 bg-black/30 p-4">
                <p className="text-zinc-500">before</p>
                <p className="mt-1 text-zinc-300">
                  Certainly! The issue appears to be that your object is recreated...
                </p>
                <p className="mt-4 text-zinc-500">after</p>
                <p className="mt-1 text-emerald-200">
                  Object recreated every render. Use useMemo.
                </p>
              </div>
            </div>
          </TerminalPanel>
        </div>
      </section>

      <Section eyebrow="install" title="CLI-first setup">
        <CodeBlock code="npx @ppwnr88/noyap init" title="shell" />
      </Section>

      <Section eyebrow="before / after" title="Shorter without losing the fix">
        <div className="grid gap-4">
          <BeforeAfter
            label="English"
            before="Certainly! The issue appears to be that your object is recreated on every render, which may cause unnecessary rerenders."
            after="Object recreated every render. Use useMemo."
          />
          <BeforeAfter
            label="Thai"
            before="ปัญหานี้อาจเกิดจาก cache ของ CDN ยังไม่ถูก purge หลัง deploy"
            after="น่าจะติด cache หลัง deploy. ลอง purge CDN."
          />
          <BeforeAfter
            label="Mixed Thai/English"
            before="sequelize include ดึง latest row ยังไงดีครับ"
            after="include ไม่ guarantee latest row. ใช้ separate + limit/order."
          />
        </div>
      </Section>

      <Section eyebrow="agents" title="Works with the coding agents developers already use">
        <AgentGrid />
      </Section>

      <Section eyebrow="thai-native" title="Not translation. Natural developer Thai.">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <FeatureCard title="language detection" accent="cyan">
            Noyap detects English, Thai, and mixed Thai/English prompts, then keeps the
            answer in the language style that feels natural for the developer.
          </FeatureCard>
          <FeatureCard title="thai dev phrasing" accent="emerald">
            It preserves common Thai developer phrasing instead of forcing formal
            translated prose.
          </FeatureCard>
        </div>
        <div className="mt-6">
          <ChipList items={thaiTerms} />
        </div>
      </Section>

      <Section eyebrow="safe merge" title="Respects existing AGENTS.md rules">
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard title="AGENTS.md strategy" accent="amber">
            Noyap supports merge, separate, overwrite, and cancel. Existing project
            instructions stay authoritative, especially warnings and team rules.
          </FeatureCard>
          <CodeBlock
            code="npx @ppwnr88/noyap init --agent codex --agents-md-strategy merge"
            title="codex"
            compact
          />
        </div>
      </Section>

      <Section eyebrow="modes + presets" title="Tune strictness by workflow">
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard title="modes" accent="purple">
            <ChipList items={modes} />
          </FeatureCard>
          <FeatureCard title="presets" accent="cyan">
            <ChipList items={presets} />
          </FeatureCard>
        </div>
      </Section>

      <Section eyebrow="benchmarks" title="Measured, linked, and conservative">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benchmarkCards.map((card) => (
            <BenchmarkCard key={card.label} {...card} />
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-zinc-500">
          Benchmark data comes from the repository fixture suite. These are not
          guaranteed savings for every project.{" "}
          <a className="text-cyan-300 hover:text-cyan-200" href={site.benchmarkSummary}>
            See benchmark report
          </a>
          .
        </p>
      </Section>

      <CTA />
    </PageShell>
  );
}
