const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@esc      Get Logged in user
//@access   Private
router.get("/", (req, res) => {
  res.json({ message: "Get Logged in user" });
});

//@route    POST api/auth
//@esc      Auth user & get token
//@access   Public
router.post("/", (req, res) => {
    res.json({ message: "Auth user & get token" });
  });
  

module.exports = router;
