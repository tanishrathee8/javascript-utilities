import { writeFile } from "node:fs/promises";

async function writeJSONFile(filePath, data) {
  const content = JSON.stringify(data, null, 2);

  await writeFile(filePath, content, "utf8");
}

const data = {
  name: "Tanish",
  role: "Developer"
};

writeJSONFile("./output.json", data)
  .then(() => console.log("JSON file written"))
  .catch(console.error);