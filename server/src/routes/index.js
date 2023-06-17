import express from "express";
import dishRoute from "./dish.route.js";
import userRoute from "./user.route.js";
import authRoute from "./auth.route.js";
import messageRoute from "./message.route.js";
import feedbackRoute from "./feedback.route.js";
import rationRoute from "./ration.route.js";

const router = express.Router();

router.use("/", userRoute);
router.use("/", authRoute);
router.use("/", dishRoute);
router.use("/", messageRoute);
router.use("/", feedbackRoute);
router.use("/", rationRoute);

export default router;
