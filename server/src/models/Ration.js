import mongoose from "mongoose";

const RationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: "Dish",
      },
    ],
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

export default mongoose.model("Ration", RationSchema);
