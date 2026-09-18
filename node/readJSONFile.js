import { readFile } from "node:fs/promises";

async function readJSONFile(filePath) {
  const content = await readFile(filePath, "utf8");

  return JSON.parse(content);
}

readJSONFile("./data.json")
  .then(console.log)
  .catch(console.error);