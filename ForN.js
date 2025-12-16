const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");
const lines = fs.readFileSync(filePath, "utf-8").split("\n");

let index = 0;

const interval = setInterval(() => {
  if (index < lines.length) {
    console.log(lines[index]);
    index++;
  } else {
    clearInterval(interval);
  }
}, 100);
