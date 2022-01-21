const express = require("express");
const Article = require("../model/article");
const postRoutes = express();

postRoutes.post("/api/article", async (req, res) => {
  const body = req.body;

  let article = new Article(body);

  article
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.get("/api/articles", async (req, res) => {
  Article.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.patch("/api/article", async (req, res) => {
  let id = req.body.params.id;
  console.log(req);

  Article.findByIdAndUpdate(id, { approval: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.patch("/api/article/like", async (req, res) => {
  let id = req.body.params.id;

  Article.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.patch("/api/article/view", async (req, res) => {
  let id = req.body.params.id;

  Article.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.delete("/api/article", async (req, res) => {
  let id = req.query.id;

  Article.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = postRoutes;
