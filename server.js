require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/Globe")
.then(() => console.log("Database is Connected >>>"))
.catch(err => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use("/", require("./src/routes/auth.routes"));

app.listen(PORT, () => {
  console.log("Server is Listening >>>");
});
