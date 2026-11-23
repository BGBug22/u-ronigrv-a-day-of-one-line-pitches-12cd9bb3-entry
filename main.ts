// A Day of One-Line Pitches — make.fun entry.
//
// Writes one sentence (226 characters) to /output/entry.txt: a warm,
// plain-words pitch that convinces a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
//
// Node 22, standard library only, no network, fully deterministic: every
// run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "That app idea you've been sitting on? Just describe it in plain words on make.fun and an AI agent will build a first version you can actually try tonight, free — no code, no cost, and if you don't love it, you've lost nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, PITCH, "utf8");
