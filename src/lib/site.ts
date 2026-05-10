export const site = {
  name: "Noyap",
  url: "https://noyap.wannarat.cc",
  description:
    "Noyap makes AI coding agents concise, multilingual, and safer for real developer workflows.",
  tagline: "Less yap. More code.",
  github: "https://github.com/ppwnr88/noyap",
  npm: "https://www.npmjs.com/package/@ppwnr88/noyap",
  readme: "https://github.com/ppwnr88/noyap#readme",
  license: "https://github.com/ppwnr88/noyap/blob/main/LICENSE",
  benchmarkSummary:
    "https://github.com/ppwnr88/noyap/blob/main/benchmarks/results/summary.md",
  benchmarkResults:
    "https://github.com/ppwnr88/noyap/blob/main/benchmarks/results/results.json",
  benchmarkCases:
    "https://github.com/ppwnr88/noyap/blob/main/benchmarks/cases.json",
};

export const navItems = [
  { href: "/docs", label: "Docs" },
  { href: "/examples", label: "Examples" },
  { href: "/benchmarks", label: "Benchmarks" },
  { href: "/install", label: "Install" },
];

export const agents = [
  "Codex",
  "Claude Code",
  "Cursor",
  "OpenCode",
  "Windsurf",
  "GitHub Copilot",
  "Cline",
  "Continue",
  "Gemini CLI",
  "Roo Code",
];

export const modes = [
  "minimal",
  "balanced",
  "senior",
  "thai-dev",
  "bilingual",
  "hardcore",
  "hardcore-th",
];

export const presets = [
  "backend",
  "frontend",
  "devops",
  "sql",
  "security",
  "reviewer",
];

export const benchmarkCards = [
  {
    label: "Token reduction",
    value: "54.12%",
    detail: "balanced mode, benchmark suite",
  },
  {
    label: "Character reduction",
    value: "58.23%",
    detail: "balanced mode, benchmark suite",
  },
  {
    label: "Line reduction",
    value: "66.67%",
    detail: "fixed benchmark fixtures",
  },
  {
    label: "Warning preservation",
    value: "100%",
    detail: "heuristic checks; review critical output",
  },
];
