const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use("/api/users", require("./models/routes/users"));
app.use("/api/auth", require("./models/routes/auth"));
app.use("/api/contacts", require("./models/routes/contacts"));

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
