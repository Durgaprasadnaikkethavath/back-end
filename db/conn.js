const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/backend_website")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server was not connected"));
