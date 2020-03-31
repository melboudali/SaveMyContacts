const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//Connect to our database
connectDB();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve Static HTML in production "index.html"
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", res => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
