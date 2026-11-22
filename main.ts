import { mkdirSync, writeFileSync } from "node:fs";

// 1–280 Unicode code points; deterministic; no network; no file reads.
const LINE1 = `The kettle clicks off, and rain takes up its slow work on the tin roof — a tune nobody wrote.`;
const LINE2 = `Your shoulders drop an inch, all on their own. Tea warms your hands; the window stays cold.`;
const LINE3 = `Nothing needs you now. Just this room, breathing slow beside you, in no hurry at all.`;
const TEXT = [LINE1, LINE2, LINE3].join(" ");
const out = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(out, TEXT, "utf8");
const n = [...TEXT].length;
if (n < 1 || n > 280 || TEXT.trim().length === 0) {
  console.error(`entry.txt would be ${n} code points — outside 1..280`);
  process.exit(1);
}
console.log(`wrote ${out} (${n} code points)`);
