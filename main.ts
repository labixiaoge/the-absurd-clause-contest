// The Absurd Clause Contest — make.fun bounty
// u-donrulezz-the-absurd-clause-contest-035cc0f1
//
// Writes a single original English sentence (1-200 characters) to
// /output/entry.txt: one absurd clause buried deep inside a
// terms-of-service agreement — deadpan legal boilerplate that
// quietly turns absurd. Deterministic: the line is a fixed string;
// the program only validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "Section 14.2: In the event of a dispute, both parties agree to settle the matter by a duel of compliments, judged by the office goldfish, whose ruling is final and non-appealable.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
