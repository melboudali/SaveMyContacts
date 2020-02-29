const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../Midlleware/Auth");
const User = require("../Schema/User");

//init midlleware
router.use(express.json({ extended: false }));
const { check, validationResult } = require("express-validator");

//@route    GET api/auth
//@esc      Get Logged in user
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const userInfos = await User.findById(req.userId).select("-password");
    res.json(userInfos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Serve Error");
  }
});

//@route    POST api/auth
//@esc      Auth user & get token
//@access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    //Express Validator
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    //Data contructor from req
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      //if we didnt find any account with that email
      if (!user)
        return res
          .status(400)
          .json({ msg: "Invalid Credentials / Email not found" });
      //if we found the account then compare password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      //if the passwords doesnt match
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
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
