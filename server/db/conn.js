/**
 * conn.js is closest to the backend.
 * Actually connects to the server.
 * Each other file is slightly more abstract than this one
 */
const { MongoClient } = require("mongodb");
//Db directly connects to the server through the ATLAS_URI
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("comments");
        console.log("Successfully connected to Username/Password collection.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
