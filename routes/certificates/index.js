const express = require('express');
const authJwt = require('../../utils/auth');
const {upload,modification}=require('./upload');
//const download=require('./download');
const multer = require('multer');
//const upload = multer({dest: './public/images'})

const router = express.Router();

router.post('/upload',upload.single('image'),(req,res) => {
    res.json(req.file)
    console.log(req.file)
});
//router.get('/download',authJwt,download);
//router.put('/modification',authJwt,modification);

module.exports = router;