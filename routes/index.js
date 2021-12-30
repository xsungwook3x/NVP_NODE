const express = require('express');
const usersRouter = require('./users');


const router = express.Router();

router.use('/users', usersRouter);

//router.post('/upload', uploadToS3.single('image'), uploadImage);

module.exports = router;