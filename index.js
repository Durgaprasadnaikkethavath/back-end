const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const userController = require("./controller/userController");

require("./db/conn");
app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "public/css")));

// const signUpRecords = require("./models/singup");

app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("index");
});

app.get("/login", userController);

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
