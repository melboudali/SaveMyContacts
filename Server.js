const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use("/api/users", require("./models/Routes/Users"));
app.use("/api/auth", require("./models/Routes/Auth"));
app.use("/api/contacts", require("./models/Routes/Contacts"));

//connect database
connectDB();

// Serve Static assets in production "idex.html"
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Server Conected"));
