import { mkdir } from "node:fs/promises";

async function ensureDirectory(directoryPath) {
  await mkdir(directoryPath, {
    recursive: true
  });

  return directoryPath;
}

ensureDirectory("./output/data")
  .then(path => console.log(`Directory ready: ${path}`))
  .catch(console.error);