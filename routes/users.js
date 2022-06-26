// Comment Header:
// FileName: routes/users.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
