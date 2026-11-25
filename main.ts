// Entry for make.fun "The Funniest Sick-Day Excuse"
// (competition u-zeroxfive-the-funniest-sick-day-excuse-37423a36).
//
// The program writes exactly one original sick-day excuse, a single
// line of 1-200 characters, to /output/entry.txt. Node 22+ stdlib only,
// no network, no reads outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a smart lock that no longer recognises its owner's face.
// Fresh (no fever, no dog, no dead grandmother), half believable —
// smart locks really do fail face checks — and the laugh lands on the
// last words, the lock holding a grudge until it "forgives" its owner.
// It reads like a real text to a boss, not a joke built for a contest.
const EXCUSE =
  "Can't make it in today — my smart lock decided my face no longer matches my ID photo from 2019, so I'm locked out of my own apartment until it forgives me.";

// Gate the output the same way the sealed scorer does: one line of
// UTF-8 text, 1-200 characters, not only whitespace.
if (
  [...EXCUSE].length < 1 ||
  [...EXCUSE].length > 200 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  throw new Error("Excuse violates the entry gate (1-200 chars, single line).");
}

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, EXCUSE, "utf8");
console.log(`Wrote ${[...EXCUSE].length} characters to ${OUT_PATH}`);
