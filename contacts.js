const fs = require("fs");
const readline = require("readline");
const validator = require("validator");

const dirtPath = "./data";

if (!fs.existsSync(dirtPath)) {
  fs.mkdirSync(dirtPath, { recursive: true });
  console.log("Folder sudah di buat!!");
}

if (!fs.existsSync(`${dirtPath}/contacts.json`)) {
  fs.writeFileSync(`${dirtPath}/contacts.json`, "[]", "utf-8");
  console.log("File sudah di buat!!!");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = (params) => {
  return new Promise((resolve, reject) => {
    rl.question(params.pertanyaan, (value) => {
      if(params.validator(value)){
        resolve(value)
      } else {
        reject("Your input error")
      }
    })
  })
}

module.exports.pertanyaan = pertanyaan
module.exports.rl = rl