import FeedbackModel from "../models/Feedback.js";

export const create = async (req, res) => {
  console.log(1);

  const { title } = req.body;
  const { userId } = req;

  console.log(userId);

  try {
    const feedback = await FeedbackModel.create({ title, user: userId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося створити відгук." });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await FeedbackModel.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося видалити відгук." });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedback = await FeedbackModel.find().populate("user");
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати відгуки." });
  }
};

export const getFeedbackById = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await FeedbackModel.findById(id);
    if (!feedback) {
      return res.status(404).json({ message: "Відгук не знайдено." });
    }
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати відгук." });
  }
};
