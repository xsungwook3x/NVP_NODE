const express = require('express');
const authJwt = require('../../utils/auth');
const {upload,modification}=require('./upload');
const download=require('./download');

const router = express.Router();

//router.post('/upload',upload);
//router.get('/download',authJwt,download);
//router.put('/modification',authJwt,modification);

module.exports = router;