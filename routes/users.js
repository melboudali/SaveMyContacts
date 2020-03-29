const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/Schema/User");
const router = express.Router();

//init midlleware
router.use(express.json({ extended: false }));

const { check, validationResult } = require("express-validator");

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    //Express Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Mongoose Schema
    const { name, email, password } = req.body;
    try {
      //Search for the email in mongodb
      let user = await User.findOne({ email });
      if (user) {
        //if we found the email
        return res.status(400).json({ msg: "User already exist!" });
      }
      //if we didnt found the email we will added new user
      user = new User({ name, email, password });
      //Bcrypt and hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //Added the user to our DB
      await user.save();
      //Create JWT token to sign in
      const payload = { user: { id: user.id } };
      //Generate jwt token and send it using
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
