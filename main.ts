import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Clause 14: any dispute arising under this agreement shall be resolved by competitive duck herding, best of three rounds, at dawn, on neutral farmland.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200-character limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
chmodSync(join(outDir, "entry.txt"), 0o644);
