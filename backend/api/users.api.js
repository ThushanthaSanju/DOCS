const { createUser, allUsers, login } = require("../dal/user.dao");
const bcrypt = require("bcrypt");

const registerUser = async (data) => {
  let pass = data.password;
  //Encrypt the password
  const hashPassword = await bcrypt.hash(pass, 10);

  const details = {
    name: data.name,
    email: data.email,
    password: hashPassword,
    userRole: data.userRole,
  };

  return await createUser(details);
};

//get all users

const getAllUsers = async () => {
  return await allUsers();
};

//login

const loginUser = async (email, password) => {
  //   const loginDetails = {
  //     email: data.email,
  //     password: data.password,
  //   };

  return await login(email, password);
};

module.exports = { registerUser, getAllUsers, loginUser };
