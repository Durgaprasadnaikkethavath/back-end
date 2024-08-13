const signUpRecords = require("../models/singup");

const showLogin = async (req, res) => {
  try {
    res.render("login");
  } catch (e) {
    console.log(e);
  }
};

const loginUser = async (req, res) => {};
