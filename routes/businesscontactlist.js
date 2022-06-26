// Comment Header:
// FileName: routes/businesscontactlist.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

var express = require("express");
var router = express.Router();
const passport = require("passport");

let mongoose = require("mongoose");
() => {};
let bus_contact_list = require("../models/business_contact_list");

//Protect logged in routes
module.exports = checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("Authentication successful");
    next();
  } else {
    console.log("redirecting.....");
    res.redirect("/login");
  }
};

//Display the list of business contacts list from the Mongo Database and display it in the table created by the contactslist ejs page.
router.get("/", checkAuthenticated, (req, res, next) => {
  //retreive the list of business contacts from the mongoDB database
  bus_contact_list.find((err, list) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact/contactsList", {
        title: "Contact Lists",
        list,
      });
    }
  });
});

//Display the form to enter details for replacing information in the given contact.
router.get("/update/:id", checkAuthenticated, (req, res, next) => {
  let id = req.params.id;

  // Find the id of the contact to be updates using id taken from the table of ejs file.
  bus_contact_list.findById(id, (err, contactToUpdate) => {
    if (err) {
      console.error(err);
    } else {
      console.log(contactToUpdate);
      res.render("contact/update", {
        title: "Update a Contact",
        list: contactToUpdate,
      });
    }
  });
});

//Update the list of contacts after authentication check and retrieveing the id of contact to be updates
router.post("/update/:id", checkAuthenticated, (req, res, next) => {
  let id = req.params.id;
  let updateContact = bus_contact_list({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    contactEmail: req.body.contactEmailAddress,
  });

  // The below function updates a single entry and the entry's reference is provided by id.
  bus_contact_list.updateOne({ _id: id }, updateContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/business_contact_list");
    }
  });
});

//Delete a single Contact
router.get("/delete/:id", checkAuthenticated, (req, res, next) => {
  let id = req.params.id;
  //The below function removes a single entry from the contacts list using the parameter id taken drom the table of contents in the contacts list ejs page.
  bus_contact_list.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      res.redirect("/business_contact_list");
    }
  });
});

module.exports = router;
