const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all userscontacts
//@access   Private
router.get("/", (req, res) => {
  res.json({ message: "Get all contacts" });
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private
router.post("/", (req, res) => {
  res.json({ message: "Add new contact" });
});

//@route    PUT api/contacts/:id
//@desc     Update contact
//@access   Private
router.put("/:id", (req, res) => {
  res.json({ message: `Update contact ${req.params.id}` });
});

//@route    GET api/contacts/:id
//@desc     Delete contact
//@access   Private
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete contact ${req.params.id}` });
});

module.exports = router;
