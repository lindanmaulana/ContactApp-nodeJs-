const fs = require('fs')
const validator = require('validator')
const {pertanyaan, rl} = require('./contacts.js')


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

  const file = fs.readFileSync(`./data/contacts.json`, "utf-8");
  const contact = JSON.parse(file);
  contact.push(bunnyData);

  fs.writeFileSync(`./data/contacts.json`, JSON.stringify(contact));

  console.log("Data sudah tersimpan!!");
  rl.close()
};

mainApp();