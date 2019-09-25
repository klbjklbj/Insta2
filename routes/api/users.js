const express = require("express");
const router = express.Router();
// bring in User model
const User = require("../../models/User");

// @route   POST api/users/register
// @desc    Register a user
// @access  Public

// This route below is called when user hits submit button
// Express is already set up in server.js to use bodyParser in json format
// So, req will already be parsed as key value pair
// findOne is built in function of MongoDb
// User refers to User table, email is column in schema
// req is what user is sending
// Then and catch are promise statement, not like if and else
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: "Email already exists"
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
