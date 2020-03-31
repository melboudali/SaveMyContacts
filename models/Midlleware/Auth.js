const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Get the Token from the Header
  const token = req.header("x-auth-token");

  // Check if the http request does not contain the token
  if (!token)
    return res.status(401).json({ msg: "No Token, Authorization Denied" });

  // if the request contain the token
  try {
    // decoding the token and get the real id
    const decodedID = jwt.verify(token, config.get("jwtSecret"));
    // Add the id to the req
    req.userID = decodedID.user.id;
    next();
  } catch (error) {
    //invalid token
    res.status(401).json({ msg: "Token is not valid" });
  }
};
