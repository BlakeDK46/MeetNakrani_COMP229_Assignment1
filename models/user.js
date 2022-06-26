// Comment Header:
// FileName: models/users.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
    username: String,
    password: String,
    emailAddress: String
},
{
  collection: "usersList"
});

module.exports = mongoose.model('usersList', userModel);