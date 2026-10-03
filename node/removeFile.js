import { unlink } from "node:fs/promises";

async function removeFile(filePath) {
  try {
    await unlink(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }

    throw error;
  }
}

removeFile("./temp.txt")
  .then(removed => {
    console.log(
      removed ? "File removed" : "File does not exist"
    );
  })
  .catch(console.error);