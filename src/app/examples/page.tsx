import type { Metadata } from "next";
import { BeforeAfter, PageShell, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Examples",
  description: "Realistic Noyap examples for React, SQL, Docker, Next.js, Sequelize, DevOps, and Thai mixed-language prompts.",
  alternates: { canonical: "/examples" },
};

const examples = [
  {
    label: "React",
    before: "The component may be rerendering because the callback is recreated each time and passed to a memoized child component.",
    after: "Callback recreated each render. Wrap it with useCallback before passing to memoized child.",
  },
  {
    label: "SQL",
    before: "This query might be slow because the database has to scan many rows before sorting by created_at.",
    after: "Likely full scan before sort. Add index on filtered columns + created_at.",
  },
  {
    label: "Docker",
    before: "Docker build ช้าเพราะ layer cache อาจไม่ hit จากการ copy files ก่อน install dependencies",
    after: "Layer cache ไม่ hit. Copy package files ก่อน npm install แล้วค่อย copy source.",
  },
  {
    label: "Next.js",
    before: "หลัง deploy แล้วยังเห็นข้อมูลเก่า อาจเกี่ยวกับ revalidate หรือ CDN cache ที่ยังไม่หมดอายุ",
    after: "น่าจะ cache ค้าง. เช็ค revalidate/cache-control แล้ว purge CDN.",
  },
  {
    label: "Sequelize",
    before: "sequelize include ดึง latest row ยังไงดีครับ",
    after: "include ไม่ guarantee latest row. ใช้ separate + limit/order.",
  },
  {
    label: "DevOps",
    before: "The service is probably failing because the environment variable is missing in the deployment runtime.",
    after: "Runtime env missing. Add it to deploy config, then restart service.",
  },
  {
    label: "Thai mixed-language",
    before: "route ชนกันใน Next.js app router debug ยังไงดี",
    after: "เช็ค segment ซ้ำ, dynamic route priority, และ route groups ที่ resolve path เดียวกัน.",
  },
];

export default function ExamplesPage() {
  return (
    <PageShell>
      <Section eyebrow="examples" title="What Noyap changes in real developer conversations" className="pt-20">
        <div className="grid gap-4">
          {examples.map((example) => (
            <BeforeAfter key={example.label} {...example} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
