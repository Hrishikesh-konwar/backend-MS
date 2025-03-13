const express = require('express');
const router = express.Router();

const { validateCourse, validateCreateCourse } = require('../../../../middleware/courses/validation')
const { getAllCourse, getCourse, updateCourse, createCourse } = require('../controller/index');

router.use('/health-check', (req, res)=>{
    res.send({
        message: `Server is up and running for v1 courses!`,
      })
});

router.get("/", getAllCourse);
router.get("/:id", getCourse);
router.post("/",validateCourse, updateCourse);
router.post('/create',validateCreateCourse, createCourse)


module.exports = router;