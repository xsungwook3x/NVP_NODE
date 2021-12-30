const multer= require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, 'public/images/');
      },
      // convert a file name
      filename: (req, file, cb) => {
          id=req.body.id;
        cb(null, id+path.extname(file.originalname));
      },
    }),
  });

const modification