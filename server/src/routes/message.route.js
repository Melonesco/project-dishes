import express from "express";
import { checkAuth, handleValidationErrors } from "../../utils/index.js";
import * as MessageController from "../controllers/MessageController.js";

const router = express.Router({ mergeParams: true });

router.post(
  "/message",
  checkAuth,
  handleValidationErrors,
  MessageController.createMessage
);

router.get(
  "/message",
  checkAuth,
  handleValidationErrors,
  MessageController.getMessage
);

router.get(
  "/messages",
  checkAuth,
  handleValidationErrors,
  MessageController.getAllMessages
);

router.delete(
  "/message/:id",
  checkAuth,
  handleValidationErrors,
  MessageController.deleteMessage
);

export default router;
