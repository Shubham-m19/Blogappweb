require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap"));

app.get("/", (req, res) => {
  
  res.render(__dirname + "/views/index");
});

app.get("/about", (req, res) => {
  
  res.render(__dirname + "/views/About");
});

app.get("/contact", (req, res) => {
  
  res.render(__dirname + "/views/Contact");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});