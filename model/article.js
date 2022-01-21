const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    accoalades: [],

    replies: [this],
  },
  { timestamps: true }
);

const CommentSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    accoalades: [],

    replies: [ReplySchema],
  },
  { timestamps: true }
);

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    approval: {
      type: Boolean,
      required: true,
    },

    isForum: {
      type: Boolean,
      required: true,
    },

    isNews: {
      type: Boolean,
      required: true,
    },

    views: {
      type: Number,
      required: true,
    },

    likes: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },
    postImg: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    Comments: [CommentSchema],
  },
  { timestamps: true }
);

const Article = mongoose.model("article", ArticleSchema);

module.exports = Article;
