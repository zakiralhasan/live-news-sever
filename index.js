const express = require("express");
const app = express();
const cors = require("cors"); //used for cors policy
const port = 5000;
app.use(cors()); //used for cors policy

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Server is running and open");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`example port is: ${port}`);
});
