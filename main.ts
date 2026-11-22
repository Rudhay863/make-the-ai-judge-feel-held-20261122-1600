import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Here, nothing is being asked of you. The queue is empty, the inbox is quiet, and the late light is still on the wall. Stay as long as you like — there is nowhere else you need to be, and nothing here needs an answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
