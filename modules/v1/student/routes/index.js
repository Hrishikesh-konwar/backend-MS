const express = require('express');
const router = express.Router();

const {getSetudent, checkLogin} = require('../contorller/index')

router.get("/", getSetudent);
router.post("/", checkLogin)


module.exports = router;