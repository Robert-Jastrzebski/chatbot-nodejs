const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});





app.listen(port, () => {
  console.log("server started on port 3000");
});
