const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //Get Token from Header
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token)
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  //if we have a token lets verify then
  try {
    //decoding our token and get the real id 
    const decodedID = jwt.verify(token, config.get("jwtSecret"));
    //give the decoded id to the created userId in req 
    req.userID = decodedID.user.id;
    //then next
    next();
  } catch (error) {
    //invalid token
    res.status(401).json({ msg: "Token is not valid" });
  }
};
