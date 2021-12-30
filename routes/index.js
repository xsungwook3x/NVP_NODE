const express = require('express');
const usersRouter = require('./users');
const certificateRouter=require('./certificates');
const smsRouter=require("./sms");

const router = express.Router();

router.use('/users', usersRouter);
router.use('/sms',smsRouter);
router.use('/certificate', certificateRouter);

module.exports = router;