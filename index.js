import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const blogPosts = [{ title: 'First Post', content: 'This is the content of the first post.' }];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: blogPosts});
  });

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) =>{
  const newPost = {
    title: req.body["title"],
    content: req.body["content"],
  };
  blogPosts.push(newPost);
  console.log(req.body);
  res.redirect("/");
});

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });