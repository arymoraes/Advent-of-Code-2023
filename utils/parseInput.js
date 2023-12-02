const fs = require("fs");
const path = require("path");

const importAndParse = (fileName) => {
  const filePath = path.join(__dirname, "..", "inputs", fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return fileContent.split("\n");
};

module.exports = importAndParse;
