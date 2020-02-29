const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

app.use("/", require("./models/Routes/Index"));
app.use("/api/users", require("./models/Routes/Users"));
app.use("/api/auth", require("./models/Routes/Auth"));
app.use("/api/contacts", require("./models/Routes/Contacts"));

//connect dtabase
connectDB();

app.listen(PORT, () => console.log("Server Conected"));
