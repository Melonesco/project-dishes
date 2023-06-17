import MessageModel from "../models/Message.js";

export const createMessage = async (req, res) => {
  const { message } = req.body;
  const { userId } = req;

  try {
    const newMessage = await MessageModel.create({ message, user: userId });
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося створити повідомлення" });
  }
};

export const deleteMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMessage = await MessageModel.findByIdAndDelete(id);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Повідомлення не знайдено" });
    }
    res.status(200).json({ message: "Повідомлення успішно видалено" });
  } catch (error) {
    res.status(500).json({ error: "Не вдалося видалити повідомлення" });
  }
};

export const getMessage = async (req, res) => {
  const { id } = req.body;

  try {
    const message = await MessageModel.findById(id).populate("user");
    if (!message) {
      return res.status(404).json({ error: "Повідомлення не знайдено" });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати повідомлення" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find().populate("user");
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати повідомлення" });
  }
};
