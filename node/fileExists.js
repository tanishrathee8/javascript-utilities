import { access } from "node:fs/promises";

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

fileExists("./package.json").then(console.log);