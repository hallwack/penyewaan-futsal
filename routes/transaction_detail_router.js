import express from "express";
import {
  addTransactionDetail,
  getTransactionDetail,
  getTransactionDetailById,
} from "../controller/transaction_detail_controller.js";

const transactionDetailRouter = express.Router();

transactionDetailRouter.get("/", getTransactionDetail);
transactionDetailRouter.get("/:id", getTransactionDetailById);
transactionDetailRouter.post("/", addTransactionDetail);
// transactionRouter.patch("/:id", updateUser);
// transactionRouter.delete("/:id", deleteUser);

export default transactionDetailRouter;
