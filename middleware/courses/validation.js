const Joi = require("joi");

const validateCourse = (req, res, next) => {
  const schema = Joi.object({
    // Ensure schema is created with Joi.object()
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  next();
};

const validateCreateCourse = (req, res, next) =>{
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    type: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  next();
}

module.exports = { validateCourse, validateCreateCourse };
