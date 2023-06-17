import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as FeedbackController from "../controllers/FeedbackController.js";

const router = express.Router({ mergeParams: true });

router.post(
  "/feedback",
  checkAuth,
  handleValidationErrors,
  FeedbackController.create
);

router.get(
  "/feedbacks",
  checkAuth,
  handleValidationErrors,
  FeedbackController.getAllFeedback
);

router.delete(
  "/feedback/:id",
  checkAuth,
  handleValidationErrors,
  FeedbackController.remove
);

export default router;
