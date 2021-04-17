const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const app = express();
const axios = require("axios");

// body parsed middleware express
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/sendMessage", (req, res) => {
  // req.body.message - zmienna z wiadomoscia z czatu od uzytkownika
  // https://restcountries.eu/rest/v2/name/{name}
  // docs: #
  const url = `https://restcountries.eu/rest/v2/name/${req.body.message}`;
  console.log(url);
  axios
    .get(url)
    .then((countryInfo) => {
      let responseData = {};
      let success = true;
      try {
        responseData = {
          country: countryInfo.data[0].name,
          currency: countryInfo.data[0].currencies[0].name,
        };
      } catch (e) {
        success = false;
      }

      res.json({
        success: success,
        data: responseData,
      });
    })
    .catch((err) => res.json({ success: false }));
});



app.listen(port, () => {
  console.log("server started on port 3000");
});
