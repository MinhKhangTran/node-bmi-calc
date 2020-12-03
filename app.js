const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   console.log("worked");
});

app.post("/", function (req, res) {
  const height = parseFloat(req.body.größe);
  const weight = parseFloat(req.body.gewicht);
  const bmi = weight / (height * height);
  res.send(`<h1 class="text-purple-500">Dein BMI ist ${bmi}</h1>`);
  //   console.log("post worked");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
