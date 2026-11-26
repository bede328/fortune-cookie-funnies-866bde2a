// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one original fortune-cookie line (<=120 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "A green build on Friday means Monday will explain why it was lying.";

// The gate only accepts 1-120 characters of UTF-8 text, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 120) {
  throw new Error(`fortune line must be 1-120 characters, got ${chars}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("fortune line must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
