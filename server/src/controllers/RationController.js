import RationModel from "../models/Ration.js";

export const createRation = async (req, res) => {
  const { userId } = req;

  try {
    const { title, dishes } = req.body;

    const newRation = await RationModel.create({
      title,
      dishes,
      user: userId,
    });

    res.status(200).json(newRation);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося створити раціон." });
  }
};

export const getAllRations = async (req, res) => {
  try {
    const rations = await RationModel.find()
      .populate("user")
      .populate("dishes");

    res.status(200).json(rations);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати раціони." });
  }
};

export const getRationById = async (req, res) => {
  const { rationId } = req.params;

  try {
    const ration = await RationModel.findById(rationId);

    if (!ration) {
      return res.status(404).json({ error: "Раціон не знайдено." });
    }

    res.status(200).json(ration);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати раціон." });
  }
};

export const deleteRation = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRation = await RationModel.findByIdAndDelete(id);

    if (!deletedRation) {
      return res.status(404).json({ error: "Раціон не знайдено." });
    }

    res.status(200).json({ message: "Раціон успішно видалено." });
  } catch (error) {
    res.status(500).json({ error: "Не вдалося видалити раціон." });
  }
};
