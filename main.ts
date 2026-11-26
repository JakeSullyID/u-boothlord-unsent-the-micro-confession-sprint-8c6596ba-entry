/**
 * Unsent micro-confession entry generator for the make.fun sprint.
 */
import fs from 'node:fs';
import path from 'node:path';

// The sudden deletion captures hesitation better than any explicit statement of fear.
// Addressing him directly anchors the unspoken forgiveness, rendering the draft unintelligible to anyone else.
const addresseeLine = 'To: Dad';
const confessionMessage = "I typed 'I forgive you' the night you died, then deleted it because I was afraid it would sound like I was saying goodbye.";

const content = [addresseeLine, confessionMessage].join('\n');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), content, 'utf8');
