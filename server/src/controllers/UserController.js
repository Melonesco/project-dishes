import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import DishModel from "../models/Dish.js";
import MessageModel from "../models/Message.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find()
      .populate("ownDishes")
      .populate("borrowedDishes");

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося отримати користувачів",
    });
  }
};

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      login: req.body.login,
      nickname: req.body.nickname,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "60d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не получилося зареєструватися користувача",
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ login: req.body.login });

    if (!user) {
      return res.status(404).json({
        message: "Користувача не найдено",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неправильний логін або пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не получилося зареєструватися користувача",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)
      .populate("ownDishes")
      .populate("borrowedDishes");

    if (!user) {
      return res.status(404).json({
        message: "Користувача не знайдено",
      });
    }
    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Немає доступу",
    });
  }
};

export const update = async (req, res) => {
  try {
    const userId = req.userId;
    const updateData = req.body;

    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(updateData.password, salt);
      updateData.passwordHash = hash;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "Користувача не знайдено",
      });
    }

    const { passwordHash, ...userData } = updatedUser._doc;

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося оновити дані користувача",
    });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserModel.findByIdAndRemove(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "Користувача не знайдено",
      });
    }

    await DishModel.find({ user: id });

    await DishModel.deleteMany({ user: id });

    await MessageModel.find({ user: id });

    await MessageModel.deleteMany({ user: id });

    res.json({
      message: "Користувача видалено успішно",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося видалити користувача",
    });
  }
};

export const changeAdminStatus = async (req, res) => {
  const { isAdmin } = req.body;
  const { id } = req.params;

  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { adminStatus: isAdmin },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Користувач не знайдений" });
    }

    return res
      .status(200)
      .json({ message: "adminStatus змінено успішно", user });
  } catch (error) {
    console.error("Помилка при зміні adminStatus:", error);
    return res.status(500).json({ message: "Сталася помилка сервера" });
  }
};
