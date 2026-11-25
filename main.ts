// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one line (<=200 chars) to /output/entry.txt. Deterministic, offline, no deps.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'Confession: those 2 a.m. "No Internet" errors were me blocking your 47 texts to your ex, Kevin. His router does the same for him. We have a group chat.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
