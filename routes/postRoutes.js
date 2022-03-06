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
    .catch((err) => res.status(404).send(err));
});

postRoutes.get("/api/articles", async (req, res) => {
  Article.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.get("/api/post", async (req, res) => {
  let id = req.query.id;

  Article.findOne({ _id: id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

postRoutes.patch("/api/article/approve", async (req, res) => {
  let id = req.body.params.id;

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

postRoutes.post("/api/article/comment", async (req, res) => {
  const body = req.body;

  Article.findByIdAndUpdate(
    body.to,
    { $push: { Comments: body }, $inc: { count: 1 } },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(404).send(err));
});

postRoutes.post("/api/article/reply", async (req, res) => {
  const body = req.body;
  let id = req.body.post_id;
  let parent = req.body.id;

  let article = await Article.findOne({ _id: id });

  if (article) {
    article.Comments.forEach((element) => {
      if (element._id == parent) {
        element.replies.push({
          to: body.to,
          author: body.author,
          content: req.body.content,
        });
        article.count += 1;

        article
          .save()
          .then(() => {
            res.send(article);
          })
          .catch((err) => res.status(404).send(err));
      }
    });
  }
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
