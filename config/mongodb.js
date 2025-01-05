const mongoose = require("mongoose");
const database = "test";
const mongodb = mongoose.createConnection(
  `mongodb://localhost:27017/${database}`
);
mongodb.on("error", console.error.bind(console, "error connect mongodb"));
mongodb.once("open", () => console.log("conenct mongodb success"));

module.exports = mongodb;

// test
// const mongodb = require('./config/mongodb')
// const id =mongodb.id
// console.log(id)
