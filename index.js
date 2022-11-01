require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

// Start Server
const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Server started at port no ${Port}`));

// Database Connection
require("./Database/Connection");

// Routing
const messageRouter = require("./Routes/Message");
app.use("/Messages", messageRouter);
