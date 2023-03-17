// /**
//  * Directly connects to the server.
//  */
// const { MongoClient } = require("mongodb");
//Db directly connects to the server through the ATLAS_URI
// const Db = process.env.ATLAS_URL;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
// Verify we got a good "db" object
//       if (db) {
//         _db = db.db("comments");
//         console.log("Successfully connected to Username/Password collection.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };
