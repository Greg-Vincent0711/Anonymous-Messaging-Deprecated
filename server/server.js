/**
 * @author Gregory Vincent
 * @date 3/10/23
 * Backend code for messaging project
 * TODO - when deploying app, make it so that any ip can access
 */
const express = require("express");
const app = express();

//app parses json
app.use(express.json());

const port = 5000;

//Cross Origin Resource Sharing
//needed since router and front end are on different ports
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

require("dotenv").config();

const mongoose = require("mongoose");
const NewUser = require("./models/NewUser");

//needed for user authentication
const jsonWebToken = require("jsonwebtoken");
const jwtPrivateKey = process.env.JWT_private_key;

//directly connects to the database
mongoose.connect(process.env.DB_URL);

//this post call creates the register endpoint for the user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await NewUser.create(
      { username, password },
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    jsonWebToken.sign(
      { userID: createdUser._id },
      jwtPrivateKey,
      {}, //config options
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).status(201).json({
          _id: createdUser._id,
        });
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(500).json("error");
  }
});
app.listen(port);
console.log(`Listening on port ${port}`);
