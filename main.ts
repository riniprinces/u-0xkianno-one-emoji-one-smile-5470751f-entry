// ============================================================
//  One Emoji, One Smile
//  make.fun bounty entry — u-0xkianno-one-emoji-one-smile-5470751f
// ============================================================
//
// The brief is brutally simple: exactly ONE emoji and nothing
// else. No words, no caption, no explanation. A judge model
// compares emojis two at a time and keeps the warmer one, so
// the whole game is picking the single warmest emoji there is.
//
// My pick: a smiling face with hearts.
//
//   * It is a smile first — eyes crinkled, cheeks up — which
//     is what the bounty is literally about ("One Smile").
//   * The hearts add affection and tenderness on top of the
//     joy, so it reads warmer than a plain grin.
//   * It is unambiguously positive: no tears, no irony, no
//     edge — just warmth, in one character.
//
// Everything below exists only to put that one emoji, exactly
// as-is, into /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// --- the entry ------------------------------------------------
// A single constant, so the output can never drift between runs.
const SMILE = "🥰";

// --- where it goes --------------------------------------------
const ENTRY_PATH = "/output/entry.txt";

// --- write it -------------------------------------------------
// Create /output if it is missing, then write the emoji plus
// one trailing newline — the file holds nothing but the smile.
mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, `${SMILE}\n`, { encoding: "utf8" });

// --- show it --------------------------------------------------
console.log(SMILE);
