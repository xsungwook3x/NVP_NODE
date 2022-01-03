const express = require('express');
const usersRouter = require('./users');
const certificateRouter=require('./certificates');
const smsRouter=require("./sms");
const authJwt = require('../utils/auth');
const visit= require('./visit');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/sms',smsRouter);
router.use('/certificate', certificateRouter);
router.post('/visit',authJwt,visit);

module.exports = router;