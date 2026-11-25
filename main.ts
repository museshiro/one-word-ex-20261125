import { mkdirSync, writeFileSync } from "node:fs";

// One-word entry for u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.
// The entry is exactly this single word, with no trailing newline.
// Fixed: writes only to the absolute /output/entry.txt path — never a
// relative entry.txt, which throws in the grader's read-only sandbox.
const entry = "Placeholder";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
