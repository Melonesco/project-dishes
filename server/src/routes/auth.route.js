import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as UserController from "../controllers/UserController.js";

const router = express.Router({ mergeParams: true });

router.post("/auth/login", handleValidationErrors, UserController.login);

router.post("/auth/register", handleValidationErrors, UserController.register);

router.get("/auth/me", checkAuth, UserController.getMe);

router.patch("/user", checkAuth, handleValidationErrors, UserController.update);

export default router;
