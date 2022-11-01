const express = require("express");
const {
  GetAllMessage,
  GetOneMessage,
  CreateMessage,
  UpdateMessage,
  DeleteMessage,
} = require("../Controllers/MessageController");
const router = express.Router();
const Messages = require("../Models/Message");

// GET ALL
router.get("/", GetAllMessage);

// GET ONE
router.get("/:id", GetOneMessage);

//CREATE
router.post("/", CreateMessage);

//UPDATE
router.put("/:id", UpdateMessage);

//DELETE
router.delete("/:id", DeleteMessage);

module.exports = router;
