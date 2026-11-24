import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line office joke delivered by this entry.
// A single reply-all "thanks" sent to the whole company refuses to die:
// the thread outlives the workweek and becomes so institutionalised that
// joining it is now part of starting the job.
const JOKE =
  "One reply-all 'thanks' to 4,000 colleagues later, the thread is nine days old and has its own onboarding doc.";

// The bounty gate: the entry must be UTF-8 text of 1 to 199 characters.
// Guard the joke here so an accidental edit can never produce an
// out-of-range file at runtime.
const MAX_ENTRY_LENGTH = 199;

if (JOKE.length === 0 || JOKE.length > MAX_ENTRY_LENGTH) {
  throw new Error(
    `Entry must be 1-${MAX_ENTRY_LENGTH} characters, got ${JOKE.length}`,
  );
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Make sure the output directory exists, then write the joke exactly:
// no trailing newline and no extra decoration.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, { encoding: "utf8" });
