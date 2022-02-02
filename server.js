const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const postRoutes = require("./routes/postRoutes");
const cookieParser = require("cookie-parser");
const path = require("path");
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(resolve(process.cwd(), "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(resolve(process.cwd(), "client/build/index.html"));
  });
}
app.use(express.json());
app.use(cookieParser());
app.use("/", routes);
app.use("/", postRoutes);
app.use(express.urlencoded({ extended: true }));
