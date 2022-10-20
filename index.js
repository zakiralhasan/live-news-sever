const express = require("express");
const app = express();
const cors = require("cors"); //used for cors policy
const port = 5000;
app.use(cors()); //used for cors policy

const categories = require("./data/categories.json");
const allNews = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Server is running and open");
});

//show category list
app.get("/categories", (req, res) => {
  res.send(categories);
});

//select category news
app.get("/category/:categoryID", (req, res) => {
  const id = req.params.categoryID;
  if (id === "08") {
    res.send(allNews);
  } else {
    const selectedCategory = allNews.filter(
      (category) => category.category_id === id
    );
    res.send(selectedCategory);
  }
});

//show all news
app.get("/news", (req, res) => {
  res.send(allNews);
});

//select news
app.get("/news/:newsID", (req, res) => {
  const id = req.params.newsID;
  const selectedNews = allNews.find((news) => news._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`example port is: ${port}`);
});
