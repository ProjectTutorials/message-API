require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

// Start Server
const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Server started at port no ${Port}`));

// Database Connection
// Requirements
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;

// CONNECTION LOG
db.once("open", () => console.log("Database Connected!"));

// ERROR LOG
db.on("error", (error) => console.error(error));

// Routing
const messageRouter = require("./Routes/Message");
app.use("/Messages", messageRouter);
