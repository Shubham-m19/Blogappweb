require("dotenv").config();
const express = require("express");
const { homeBlogs } = require("./public/homeimages.js");
const { blogCategories } = require("./public/categories.js");
const { allBlogs } = require("./public/blogs.js");


const port = process.env.PORT;

const app = express();

app.set("view engine", "ejs");


app.use(express.static(__dirname + "/node_modules/bootstrap"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("Home", { homeBlogs });
});
app.get("/categories", (req, res) => {
  res.render("Categories", { blogCategories });
});
app.get("/about", (req, res) => {
  res.render("About");
});
app.get("/contact", (req, res) => {
  res.render("Contact");
});

app.get("/category/:id", (req, res) => {
  const categorySlug = req.params.id;
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.category.toLowerCase() === categorySlug
  );
  const category = blogCategories.find((cat) => cat.slug === categorySlug);
  if (category) {
    res.render("Blogs", { category, blogs: filteredBlogs });
  } else {
    res.status(404).send("Category not found");
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});













// ....
// app.get("/", (req, res) => {
//   res.render(__dirname + "/views/Home", { FeaturesArticles });
// });

// app.get("/about", (req, res) => {
  
//   res.render(__dirname + "/views/About");
// });

// app.get("/categories", (req, res) => {
  
//   res.render(__dirname + "/views/Categories");
// });

// app.get("/contact", (req, res) => {
  
//   res.render(__dirname + "/views/Contact");
// });