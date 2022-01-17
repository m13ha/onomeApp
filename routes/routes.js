const express = require("express");
const User = require("../model/users");
const validator = require("../controller/validator");
const routes = express();

routes.get("/", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("we are live");
});

routes.post("/api/reg", async (req, res) => {
  const body = req.body;
  let creds = await validator(
    body.faculty,
    body.firstName,
    body.lastName,
    body.pswd
  );
  body.pswd = creds[2];
  body.vcode = creds[1];

  if (body.isCompany === false) {
    body.email = creds[0];
  }

  console.log(body);

  let user = new User(body);

  user
    .save()
    .then((result) => {
      let info = {
        email: result.email,
        isVerfied: result.isVerfied,
      };
      res.send(info);
    })
    .catch((err) => res.status(500).send(err));
});

routes.post("/api/verify", async (req, res) => {
  const body = req.body;
  let email = body.email;
  let code = body.code;

  let user = await User.findOne({ email });

  if (user) {
    if (user.vcode == code) {
      user = await User.findOneAndUpdate(
        { email },
        { isVerified: true, vcode: 0 },
        { new: true }
      )
        .then(() => {
          res.send(user);
        })
        .catch((err) => console.log(err));
    } else {
      res.status(501).send(`Incorrect code, Please try again`);
    }
  } else {
    res.status(502).send(`You shouldn't be here you don't exist`);
  }
});

routes.post("/api/login", async (req, res) => {
  const body = req.body;
  let username = body.username;
  let pswd = body.pswd;

  let user = await User.findOne({ username });

  if (user) {
    if (user.vcode == code) {
    } else {
      res.status(501).send(`Incorrect password`);
    }
  } else {
    res.status(502).send(`That username does not exist`);
  }
});

module.exports = routes;
