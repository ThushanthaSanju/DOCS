const users = require("./index").db("store").collection("users");
const bcrypt = require("bcrypt");

const ObjectID = require("mongodb").ObjectId;

//create user

const createUser = async ({ name, email, password, userRole }) => {
  const user = await users.insertOne({ name, email, password, userRole });

  return user;
};

//get all users

const allUsers = async () => {
  const result = await users.find();
  return result.toArray();
};

//login

const login = async (email, password) => {
  console.log(email);
  console.log(password);
  let user = await users.findOne({ email: email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { msg: "login failed" };
    } else {
      return { msg: "login ok", token: user._id, userRole: user.userRole };
    }
  } else {
    return { msg: "login failed" };
  }
};

module.exports = {
  createUser,
  allUsers,
  login,
};
