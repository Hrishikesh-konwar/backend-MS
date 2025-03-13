const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  next();
};

const validatePassword = (req, res, next) => {
  const complexityOptions = {
    min: 3,
    max: 16,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

  const passwordSchema = passwordComplexity(complexityOptions);
  const { error } = passwordSchema.validate(req.body.password);
  if (error) {
    res.status(400).send({
      message: "Password is not valid:",
      error: error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validatePassword,
};
