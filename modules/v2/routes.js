const express = require('express');
const router = express.Router();

const users = require('./users/routes/index')

router.use('/users', users)

router.get('/health-check', (req, res)=>{
    res.send({
        message: `Server is up and running for v2!`,
      })
});

module.exports = router