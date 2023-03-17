/**
 * @author Gregory Vincent
 * @date 3/10/23
 * Mongoose schema for a new user
 */
const mongoose = require("mongoose");

//defines how each record looks in the database
const NewUserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//creating the database they're all stored in
//MongoDb takes pluralized lowercase version of the name
const NewUserModel = mongoose.model("NewUser", NewUserSchema);
module.exports = NewUserModel;
