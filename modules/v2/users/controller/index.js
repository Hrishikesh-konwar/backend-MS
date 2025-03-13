const jwt = require("jsonwebtoken");
const config = require("config");

const { User } = require("../../../../schema/index");
const {
  getHashedData,
  matchPassword,
  generateJwtToken,
} = require("../../../utils");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      res.status(400).send("User with email already exists");
    }
    const hashedPassword = await getHashedData(String(password));

    const userDetails = {
      name,
      email,
      password: hashedPassword,
      role: "admin",
    };
    const saveUser = await User.create(userDetails);
    const token = await generateJwtToken({
      id: saveUser._id,
      name: saveUser.name,
      email: saveUser.email,
      role: saveUser.role,
    });

    res.header("x-auth-token", token).status(200).send({ name, email });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email }).lean();

  if (!existingUser) {
    res.status(400).send("Invalid Password or Email");
  }

  const authPassed = await matchPassword(password, existingUser.password);

  const token = await generateJwtToken({
    id: existingUser._id,
    email: existingUser.email,
    name: existingUser.name,
    role: existingUser.role,
  });

  if (authPassed) {
    res.status(200).header("x-auth-token", token).send({
      message: "Successfully Logged in",
    });
  } else {
    res.status(400).send({
      message: "Invalid Password or Email",
    });
  }
};

const getUser = async (req, res) => {
  const {role} = req.user
  if(role !== "admin"){
    res.status(400).send("Data can only be reveled to Admin");
  }
  else{
    const existingUser = await User.find().select('-password -role').lean();
    res.status(200).send(existingUser);
  }

};

module.exports = {
  createUser,
  loginUser,
  getUser,
};
