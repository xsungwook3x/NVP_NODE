const express = require('express');
const sendsms=require("./sendsms");
const router = express.Router();

router.get('/check',sendsms);

module.exports = router;