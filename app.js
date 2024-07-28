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


const mainApp = async () => {
  const nama = await pertanyaan({
    pertanyaan: "Siapa nama kamu :",
    validator: validator.isAlpha
  });
  const nomor = await pertanyaan(
    {
      pertanyaan: "Masukan nomor telepon anda: ",
      validator: validator.isNumeric
    }
  );
  const email = await pertanyaan(
    {
      pertanyaan: "Masukan email anda: ",
      validator: validator.isEmail
    }
  );

  const bunnyData = { nama, nomor, email };

  const file = fs.readFileSync(`${dirtPath}/contacts.json`, "utf-8");
  const contact = JSON.parse(file);
  contact.push(bunnyData);

  fs.writeFileSync(`${dirtPath}/contacts.json`, JSON.stringify(contact));

  console.log("Data sudah tersimpan!!");

  rl.close()
};

mainApp();