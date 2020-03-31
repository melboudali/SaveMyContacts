const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../models/Midlleware/Auth");
const User = require("../models/Schema/User");

router.use(express.json({ extended: false }));

const { check, validationResult } = require("express-validator");

//@route    GET api/auth
//@desc     Get Logged in user
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const userInfos = await User.findById(req.userID).select("-password");
    res.json(userInfos);
  } catch (error) {
    res.status(500).send("Serve Error");
  }
});

//@route    POST api/auth
//@desc     Auth user & get token
//@access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    // Express Validator
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ msg: errors.array()[0].msg });

    // Data Destructuring
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // if we didnt find any account with that email
      if (!user)
        return res
          .status(400)
          .json({ msg: "Invalid Credentials / Email not found" });

      // if we found the account then we need to compare the given password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      // if the passwords does not match
      if (!isMatch)
        return res
          .status(400)
          .json({ msg: "Invalid Credentials / Wrong Password" });

      // Create JWT Token
      // Generate jwt token and send it as JSON (expiresIn: 24h)
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 86400000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
