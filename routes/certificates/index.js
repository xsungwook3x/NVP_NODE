const express = require('express');
const authJwt = require('../../utils/auth');
const {upload}=require('./upload');
const download=require('./download');
//const upload = multer({dest: './public/images'})

const router = express.Router();

router.post('/upload',upload.single('image'),(req,res) => {
    res.json(req.file)
    console.log(req.file)
});
router.get('/download',authJwt,download);
router.put('/modification',authJwt,upload.single('image'),(req,res) => {
    res.json(req.file)
    console.log(req.file)
});

module.exports = router;