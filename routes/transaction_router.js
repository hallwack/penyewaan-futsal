import express from "express";
import {
  addTransaction,
  getTransaction,
  getTransactionById,
} from "../controller/transaction_controller.js";

const transactionRouter = express.Router();

transactionRouter.get("/", getTransaction);
transactionRouter.get("/:id", getTransactionById);
transactionRouter.post("/", addTransaction);
// transactionRouter.patch("/:id", updateUser);
// transactionRouter.delete("/:id", deleteUser);

export default transactionRouter;
