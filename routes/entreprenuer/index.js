const express = require('express');
const signUp = require('./signup');
const login = require('./login');
const refresh = require('./refresh');
const { seeProfile, modifyProfile } = require('./profile');
const {upload} = require('./upload');
const authJwt = require('../../utils/auth');
const checkId=require('./check');
const remove=require('./remove');
const {findId, findPassword} = require('./find');

const router = express.Router();

router.post('/signup', signUp);
router.post('/check',checkId);
router.post('/login', login);
router.get('/profile', authJwt, seeProfile);
router.patch('/profile', authJwt, modifyProfile);
router.post('/refresh', refresh);
router.post('/upload',upload.single('image'),(req,res) => {
    res.json(req.file)
    console.log(req.file)
});
router.delete('/',remove);
router.post('/find/id',findId);
router.post('/find/password',findPassword);
router.patch('/find/newpassword',modifyProfile);

module.exports = router;