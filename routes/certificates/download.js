const multer= require('multer');
const path = require('path');
const fs = require("fs");

const download = (req, res) => {
    const fileName = req.body.filename;
    const path = "./public/images/";
  
    res.download(path + fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "File can not be downloaded: " + err,
        });
      }
    });
};

module.exports=download;