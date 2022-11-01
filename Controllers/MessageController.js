const Messages = require("../Models/Message");

// GET ALL
const GetAllMessage = async (req, res) => {
  try {
    const Message = await Messages.find();
    res.status(200).json(Message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE
const GetOneMessage = async (req, res) => {
  try {
    const Message = await Messages.findById(req.params.id);
    res.status(200).json(Message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
const CreateMessage = async (req, res) => {
  const Message = new Messages({
    name: req.body.name,
    message: req.body.message,
    date: req.body.date,
  });
  try {
    const newMessage = await Message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
const UpdateMessage = async (req, res) => {
  try {
    const Message = await Messages.findById(req.params.id);
    await Message.updateOne({ $set: req.body });
    res.status(200).send("Message Updated");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
const DeleteMessage = async (req, res) => {
  try {
    const Message = await Messages.findById(req.params.id);
    await Message.remove();
    res.status(200).send("Message Deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  GetAllMessage,
  GetOneMessage,
  CreateMessage,
  UpdateMessage,
  DeleteMessage,
};
