/**
 * Record.js is slightlly more abstract
 * file that is based more in express and does not touch mongodb as directly
 * But is important to performing backend operations
 */
const express = require("express");
const records = express.Router();
//checks if we connected successfully
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

//returns a list of all records
records.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("comments");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//returns a single record by ID
records.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  //getQuery is the parameter the user gives in order to find a record
  let getQuery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(getQuery, function (err, result) {
    if (err) throw err;
    //if found, return the result as json
    res.json(result);
  });
});

//adds a record to the database through the post function
records.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let postQuery = {
    name: req.body.name,
    password: req.body.password,
  };
  db_connect.collection("records").insertOne(postQuery, function (err, res) {
    if (err) throw err;
    //as a response, return a JSON of the given data into the DB
    response.json(res);
  });
});

//update a record
records.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let patchQuery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    //change the message itself
    $set: {
      name: req.body.name,
      password: req.body.password,
    },
  };
  db_connect
    .collection("records")
    .updateOne(patchQuery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

//delete a record
records.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let deleteQuery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(deleteQuery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = records;
