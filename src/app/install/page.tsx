import type { Metadata } from "next";
import { CodeBlock, PageShell, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Install",
  description: "Install Noyap with npx or npm global commands.",
  alternates: { canonical: "/install" },
};

export default function InstallPage() {
  return (
    <PageShell>
      <Section eyebrow="install" title="Install Noyap" className="pt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <CodeBlock title="npx" code="npx @ppwnr88/noyap init" />
          <CodeBlock
            title="global"
            code={`npm install -g @ppwnr88/noyap
noyap init`}
          />
          <CodeBlock title="update" code="npm update -g @ppwnr88/noyap" />
          <CodeBlock title="uninstall" code="npm uninstall -g @ppwnr88/noyap" />
        </div>
      </Section>
    </PageShell>
  );
}
