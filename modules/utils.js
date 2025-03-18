const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken')

const getHashedData = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedData = await bcrypt.hash(data, salt);
    return hashedData;
  } catch (err) {
    console.log(err);
  }
};

const matchPassword = async (enteredPassword, hashedPassword) => {
  try {
    const result = await bcrypt.compare(enteredPassword, hashedPassword);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const generateJwtToken = async(data)=>{
    const JWT_TOKEN = process.env.JWT_TOKEN || "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0";
    const token = jwt.sign(data, JWT_TOKEN);
    return token
}

module.exports = {
  getHashedData,
  matchPassword,
  generateJwtToken
};
