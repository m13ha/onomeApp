const express = require("express");
const mongoose = require("mongoose");
const User = require('./model/users')
const app = express();
require("dotenv/config");

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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("we are live");
});

app.post("/api/reg", (req, res) => {
    const body = req.body;
    let user = new User(body);

    user.save(user)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});
