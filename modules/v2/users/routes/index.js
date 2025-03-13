const express = require('express');
const router = express.Router();

const { validateUser, validatePassword} = require('../../../../middleware/user/index');
const { authenticateUser } = require('../../../../middleware/auth')
const { createUser, loginUser, getUser } = require('../controller/index');


router.post('/createUser',validateUser, validatePassword, createUser);
router.post('/userLogin', validateUser,loginUser);
router.get('/getAllUsers',authenticateUser, getUser);


module.exports = router;