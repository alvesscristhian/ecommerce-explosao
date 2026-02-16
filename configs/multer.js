const multer = require("multer"); 

const storage = multer.diskStorage({  // SETA O ARMAZENAMENTO
  destination: (req, file, cb) => { // LOCAL ONDE O ARQUIVO VAI SER SALVO
    cb(null, "tmp/"); 
  },
  filename: (req, file, cb) => { // NOME DO ARQUIVO + DATA/HORA DE QUANDO FOI CRIADO
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;