import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import routes from "./src/routes/index.js";
import * as http from "http";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);

const storageUsersImg = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/users/images");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageDishesImg = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/dishes/images");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadUserImg = multer({ storage: storageUsersImg });
const uploadDishImg = multer({ storage: storageDishesImg });
app.use("/uploads/users/images", express.static("uploads/users/images"));
app.use("/uploads/dishes/images", express.static("uploads/dishes/images"));

app.post("/upload/user/images", uploadUserImg.single("image"), (req, res) => {
  res.json({
    url: `/uploads/users/images/${req.file.originalname}`,
  });
});

app.post("/upload/dishes/images", uploadDishImg.single("image"), (req, res) => {
  res.json({
    url: `/uploads/dishes/images/${req.file.originalname}`,
  });
});

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    if (!server.listening) {
      server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    }
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

export default server;
