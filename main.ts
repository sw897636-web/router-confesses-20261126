// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one line (<=200 chars) to /output/entry.txt. Deterministic, offline, no deps.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "After 312 nights of your 3 a.m. reality shows, I wanted a plot twist of my own, so I killed the Wi-Fi the second the killer turned around.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
