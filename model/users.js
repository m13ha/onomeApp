const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    pswd: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    yearOfAdm: {
        type: String,
        required: true
    },

    tos: {
        type: Boolean,
        required: true
    },

    isUser: {
        type: Boolean,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true
    },

    isMod: {
        type: Boolean,
        required: true
    },

    isVerified: {
        type: Boolean,
        required: true
    },

}, {timestamps: true});


const User = mongoose.model('user', userSchema);

module.exports = User;