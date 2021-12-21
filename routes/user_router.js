import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controller/user_controller.js";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.get("/:id", getUserById);
userRouter.post("/", addUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
