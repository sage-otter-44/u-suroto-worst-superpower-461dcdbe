// Worst Superpower — one-line entry writer.
// The entry invents a superpower that is genuinely useless: freezing time
// only while asleep, so the power can never be used awake.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I can freeze time, but only while I am asleep — the whole world holds its breath all night, then exhales the second I open my eyes.";

// Revision: enforce the sealed gate explicitly before writing — the scorer
// requires 1–140 UTF-8 characters, and an invalid line never reaches the judge.
const MAX_CHARS = 140;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1–${MAX_CHARS}`);
}
const trimmed = ENTRY.trim();
if (trimmed !== ENTRY) throw new Error("entry must not start or end with whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
