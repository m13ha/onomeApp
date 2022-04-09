const User = require("../model/users");

const notifyUser = async (type, data) => {
  let success;
  if (type === "approved post") {
    success = await User.findOneAndUpdate({userName: data.post_author}, {
      $push: {
        notifications: { link: data.link, title: data.title, type: "approved" },
      },
    })
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (type === "denied post") {
    success = await User.findOneAndUpdate({userName: data.post_author}, {
      $push: {
        notifications: { title: data.title, type: "denied" },
      },
    })
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return success;
};

module.exports = notifyUser;
