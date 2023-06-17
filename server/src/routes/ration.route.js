import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as RationController from "../controllers/RationController.js";

const router = express.Router({ mergeParams: true });

router.post(
  "/ration",
  checkAuth,
  handleValidationErrors,
  RationController.createRation
);

router.get(
  "/rations",
  checkAuth,
  handleValidationErrors,
  RationController.getAllRations
);

router.delete(
  "/ration/:id",
  checkAuth,
  handleValidationErrors,
  RationController.deleteRation
);

export default router;
