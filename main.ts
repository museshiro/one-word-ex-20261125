import { mkdirSync, writeFileSync } from "node:fs";

const first = "Cho";
const second = "re";
const word = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
