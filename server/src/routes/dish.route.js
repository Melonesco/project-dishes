import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as DishController from "../controllers/DishController.js";

const router = express.Router({ mergeParams: true });

router.get("/dishes", handleValidationErrors, DishController.getAllDishes);

router.get("/dishes/:id", handleValidationErrors, DishController.getDishById);

router.post(
  "/dishes",
  checkAuth,
  handleValidationErrors,
  DishController.create
);

router.post(
  "/dishes/borrowed",
  checkAuth,
  handleValidationErrors,
  DishController.addDishToBorrowed
);

router.delete(
  "/dishes/borrowed",
  checkAuth,
  handleValidationErrors,
  DishController.removeUserDish
);

router.delete(
  "/dish/:id",
  checkAuth,
  handleValidationErrors,
  DishController.removeDish
);

export default router;
