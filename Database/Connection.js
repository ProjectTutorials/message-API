// Requirements
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;

// CONNECTION LOG
db.once("open", () => console.log("Database Connected!"));

// ERROR LOG
db.on("error", (error) => console.error(error));
