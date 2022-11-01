const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    collection: "Messages",
    versionKey: false,
  } // To Fix "__v: 0"
);

module.exports = mongoose.model("Messages", messageSchema);
