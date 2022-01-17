const mailer = require("../controller/mailer");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMsg = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const notice = new Schema(
  {
    type: {
      type: String,
    },

    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },

    busName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    userName: {
      type: String,
      required: true,
      unique: true,
    },

    pswd: {
      type: String,
      required: true,
    },

    faculty: {
      type: String,
    },

    department: {
      type: String,
    },

    dob: {
      type: Date,
    },

    gender: {
      type: String,
    },

    yearOfAdm: {
      type: String,
    },

    vcode: {
      type: Number,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
    },

    addr: {
      type: String,
    },

    tos: {
      type: Boolean,
      required: true,
    },

    isStudent: {
      type: Boolean,
      required: true,
    },

    isCompany: {
      type: Boolean,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
    },

    isMod: {
      type: Boolean,
      required: true,
    },

    isVerified: {
      type: Boolean,
      required: true,
    },

    directMsg: [userMsg],

    notification: [notice],
  },
  { timestamps: true }
);

userSchema.post("save", function (doc, next) {
  console.log("user saved to database");
  mailer(doc.vcode, doc.email);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
