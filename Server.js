const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//connect database
connectDB();

app.use("/api/users", require("./routes/Users"));
app.use("/api/auth", require("./routes/Auth"));
app.use("/api/contacts", require("./routes/Contacts"));

// Serve Static assets in production "idex.html"
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, err =>
  err ? console.log(err) : console.log("Server Conected")
);
