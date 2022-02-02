const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
const postRoutes = require('./routes/postRoutes');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
require("dotenv").config();

let port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use('/', routes);
app.use('/', postRoutes);
app.use(express.urlencoded({ extended: true }));
