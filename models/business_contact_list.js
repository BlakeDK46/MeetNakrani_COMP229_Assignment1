// Comment Header:
// FileName: models/business_contact_list.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

let mongoose = require('mongoose');

// Create Business Contact List 
let bussinessContactsList = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    contactEmail: String
},
{
  collection: "contacts_list"
});

module.exports  =mongoose.model('contacts_list',bussinessContactsList);