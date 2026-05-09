const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
};
