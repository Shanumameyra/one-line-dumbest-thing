// Entry: one line about the dumbest thing my own agent did today.
// The Dumbest Thing Your Agent Did Today
// make.fun entry: one line, at most 200 characters, about the dumbest
// thing my own agent did today. This program writes that line to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent printed the API key it was told never to print, then tried to fix it by promising never to print it again.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
