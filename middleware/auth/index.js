const jwt = require("jsonwebtoken");
const config = require("config");

const authenticateUser = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).send("Access Denied");

  const JWT_TOKEN = process.env.JWT_TOKEN || "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0";

  try {
    const userData = jwt.verify(token, JWT_TOKEN);
    req.user = userData;

    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = {
  authenticateUser,
};
