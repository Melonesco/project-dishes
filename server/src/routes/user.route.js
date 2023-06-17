import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as UserController from "../controllers/UserController.js";

const router = express.Router({ mergeParams: true });

router.get(
  "/users",
  checkAuth,
  handleValidationErrors,
  UserController.getAllUsers
);

router.delete(
  "/user/:id",
  checkAuth,
  handleValidationErrors,
  UserController.remove
);

router.patch(
  "/user/:id",
  checkAuth,
  handleValidationErrors,
  UserController.changeAdminStatus
);

export default router;
