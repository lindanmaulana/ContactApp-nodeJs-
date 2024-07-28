
const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Siapa nama kamu: ", (nama) => {
      if (validator.isAlpha(nama)) {
        resolve(nama);
      } else {
        reject("Nama yang anda inputkan salah");
      }
    });

    
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukan nomor hp kamu: ", (nomor) => {
      if (validator.isMobilePhone(nomor, "id-ID")) {
        resolve(nomor);
      } else {
        reject("Nomor yang anda masukan salah");
      }
    });

    
  });
};

const pertanyaan3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukan email kamu: ", (email) => {
      if (validator.isEmail(email)) {
        resolve(email);
      } else {
        reject("Email yang anda masukan salah");
      }
    });

    
  });
};