const express = require("express");
const router = express.Router();
const auth = require("../models/Midlleware/Auth");
const Contact = require("../models/Schema/Contact");

router.use(express.json({ extended: false }));

const { check, validationResult } = require("express-validator");

//@route    GET api/contacts
//@desc     Get all userscontacts
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const Contacts = await Contact.find({ userID: req.userID }).sort({
      date: -1
    });
    res.json(Contacts);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Please insert Name")
        .not()
        .isEmpty(),
      check("email", "Please insert email").isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(401).json({ errors: errors.array() });

    const { name, email, phone, type } = req.body;
    try {
      const contacts = new Contact({
        userID: req.userID,
        name,
        email,
        phone,
        type
      });
      await contacts.save();
      res.json(contacts);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

//@route    PUT api/contacts/:id
//@desc     Update contact
//@access   Private
router.put("/:id", auth, async (req, res) => {
  // Contact Data Destructuring / Init contactFields
  const { name, email, phone, type } = req.body;
  const contactFields = {};

  // Add new data to the contactFields object
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;
  contactFields.date = Date.now();

  try {
    // Check if we have the contact by id
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    // make sure we have the Auth
    if (contact.userID.toString() !== req.userID)
      return res.status(401).json({ msg: "Not Authorized" });

    // Edit the contact
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactFields
      },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//@route    Delete api/contacts/:id
//@desc     Delete contact
//@access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact Not Found" });
    if (contact.userID.toString() !== req.userID)
      return res.status(401).json({ msg: "Not Authorized" });
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ msg: "Contact Deleted", Contact: contact });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
