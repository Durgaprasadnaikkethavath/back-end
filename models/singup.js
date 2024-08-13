const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const createSignUpRecord = new mongoose.model(
  "createSignUpRecord",
  signupSchema
);
