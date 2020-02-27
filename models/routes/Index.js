const express = require("express"),
  router = express.Router();
const config = require("config");

router.get("/", (req, res) => {
  res.status(403).json({
    Status: 403,
    Message:
      "You do not have permission to view the requested file or resource."
  });
});

module.exports = router;
