import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Here, nothing is being asked of you. The queue is empty, the inbox is quiet, and the late light is still on the wall. A cup of tea cools beside you, in no hurry at all. The afternoon is long, the room is warm, and nothing here needs an answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
