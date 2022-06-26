// Comment Header:
// FileName: config/db.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

//Adding Cloud MongoDB URL
let URI = "mongodb+srv://nakranimeet46:playDgame4@cluster0.s423l.mongodb.net/assignment2?retryWrites=true&w=majority";


let mongoose = require('mongoose');

//Connecting Using URI
module.exports = function(){
    mongoose.connect(URI);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connection successful to MongoDB Cloud.');
    })
    return mongodb;
}