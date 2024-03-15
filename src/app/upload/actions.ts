"use server";

import fs from "fs";
import { randomUUID } from "node:crypto";

export async function upload(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();

  const id = randomUUID();
  const ext = file.name.split(".").at(-1);
  const filename = `${id}.${ext}`;

  fs.appendFile(`./public/${filename}`, Buffer.from(arrayBuffer), () => {
    fs.readFile("./tmp/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return { message: "Internal server error" };
      }

      try {
        const db = JSON.parse(data);
        db.images.push(filename);
        fs.writeFileSync("./tmp/db.json", JSON.stringify(db));
      } catch (error) {
        console.error(error);
        return { message: "Internal server error" };
      }
    });
  });
}
