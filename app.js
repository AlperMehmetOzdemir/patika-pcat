const express = require('express');
const path = require("path")
const ejs = require("ejs");

const app = express();

const PORT = 5000;

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', (req, res) => {

  res.render("index")
});

app.get("/about", (req,res) => {
  res.render("about")
})

app.get("/add_post", (req,res) => {
  res.render("add_post")
})

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
