import DishModel from "../models/Dish.js";
import UserModel from "../models/User.js";

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await DishModel.find().populate("user");
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: "Помилка сервера" });
  }
};

export const getDishById = async (req, res) => {
  const { id } = req.params;

  try {
    const dish = await DishModel.findById(id).populate("user");

    if (!dish) {
      return res.status(404).json({ error: "Страву не знайдено" });
    }

    res.status(200).json(dish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Помилка сервера" });
  }
};

export const create = async (req, res) => {
  try {
    const {
      title,
      weight,
      time,
      calorie,
      type,
      productList,
      description,
      imageUrl,
      imagesUrl,
      status,
    } = req.body;
    const userId = req.userId;

    const dish = new DishModel({
      title,
      weight,
      time,
      calorie,
      type,
      productList,
      description,
      imageUrl,
      imagesUrl,
      status,
      user: userId,
    });

    const newDish = await dish.save();

    const user = await UserModel.findById(userId);
    user.ownDishes.push(newDish._id);
    await user.save();

    res.json(newDish);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вийшло створити статтю!!!",
    });
  }
};

export const addDishToBorrowed = async (req, res) => {
  const { dishId } = req.body;
  const { userId } = req;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Користувача не знайдено" });
    }

    const dish = await DishModel.findById(dishId);

    if (!dish) {
      return res.status(404).json({ error: "Страву не знайдено" });
    }

    if (user.borrowedDishes.includes(dishId)) {
      return res
        .status(400)
        .json({ error: "Страва вже додана до borrowedDishes" });
    }

    user.borrowedDishes.push(dishId);

    await user.save();

    return res
      .status(200)
      .json({ message: "Страва успішно додана до borrowedDishes" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Помилка сервера" });
  }
};

export const removeUserDish = async (req, res) => {
  const { dishId } = req.body;
  const { userId } = req;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Користувач не знайдений" });
    }

    let dishArray, successMessage;
    if (user.borrowedDishes.includes(dishId)) {
      dishArray = user.borrowedDishes;
      successMessage = "Страва успішно видалена з borrowedDishes";
    } else if (user.ownDishes.includes(dishId)) {
      dishArray = user.ownDishes;
      successMessage = "Страва успішно видалена";
      await DishModel.findByIdAndRemove(dishId);
    } else {
      return res.status(404).json({ error: "Страва не знайдена" });
    }

    const dishIndex = dishArray.indexOf(dishId);
    dishArray.splice(dishIndex, 1);
    await user.save();

    return res.status(200).json({ message: successMessage });
  } catch (error) {
    console.error("Помилка під час видалення страви:", error);
    return res.status(500).json({ error: "Помилка сервера" });
  }
};

export const removeDish = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDish = await DishModel.findByIdAndRemove(id);

    if (!deletedDish) {
      return res.status(404).json({ message: "Рецепт не знайдено" });
    }

    return res.status(200).json({ message: "Рецепт успішно видалено" });
  } catch (error) {
    console.error("Помилка при видаленні рецепту:", error);
    return res.status(500).json({ message: "Сталася помилка сервера" });
  }
};
