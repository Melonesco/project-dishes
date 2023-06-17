import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: false,
    },
    adminStatus: {
      type: Boolean,
      default: false,
      required: false,
    },
    ownDishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: "Dish",
      },
    ],
    borrowedDishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: "Dish",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserData", UserSchema);
