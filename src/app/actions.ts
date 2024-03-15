"use server";

import fs from "fs";

export async function getDb() {
  return JSON.parse(fs.readFileSync("./tmp/db.json", { encoding: "utf8" }));
}
