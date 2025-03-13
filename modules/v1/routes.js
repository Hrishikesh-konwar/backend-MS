const express = require('express');
const router = express.Router();

const courses = require('./courses/routes/index')
const student = require('./student/routes/index')

router.use('/course', courses)
router.use('/student', student)

router.get('/health-check', (req, res)=>{
    res.send({
        message: `Server is up and running for v1!`,
      })
});

module.exports = router