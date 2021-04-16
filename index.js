const express = require("express");
const port = process.env.PORT || 3000
const path = require("path");
const app = express();
const axios = require("axios")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index"); 
});

app.get('/favicon.ico', (req, res) => res.status(204));

axios.get('https://restcountries.eu/rest/v2/name/poland')
.then((response) => {
  console.log(response.data)
})
.catch(console.error)




app.listen(port)