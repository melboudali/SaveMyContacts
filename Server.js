const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/", require("./models/routes/Index"));
app.use("/api/users", require("./models/routes/Users"));
app.use("/api/auth", require("./models/routes/Auth"));
app.use("/api/contacts", require("./models/routes/Contacts"));

app.listen(PORT, () => console.log("Server Conected"));
