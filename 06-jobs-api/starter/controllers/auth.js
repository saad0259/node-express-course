const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: { uid: user._id, name: user.name, email: user.email },
    token,
  });
};
const login = async (req, res) => {
  console.log("Login user...");
};

module.exports = { register, login };
