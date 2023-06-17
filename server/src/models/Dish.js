import mongoose from "mongoose";

const DishSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    calorie: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    productList: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    imagesUrl: {
      type: Array,
      default: [],
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserData",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Dish", DishSchema);
