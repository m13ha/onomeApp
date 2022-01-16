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
    .then((result) => res.send(result))
    .catch((err) => res.send(err));

});

module.exports = routes;
