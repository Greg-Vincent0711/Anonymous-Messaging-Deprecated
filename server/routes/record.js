//basic setup from MERN tutorial
/**
 * Record.js is slightlly more abstract
 * file that is based more in express and does not touch mongodb as directly
 */
const express = require("express");
//router directly works with the server
const recordRoutes = express.Router();
//checks if we connected successfully
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

//returns a list of all records
recordRoutes.route("/record").get(function (req, res) {
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
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  //myquery is the parameter the user gives in order to find a record
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err;
    //if found, return the result as json
    res.json(result);
  });
});

//adds a record to the database through the post function
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//update a record
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

//delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
