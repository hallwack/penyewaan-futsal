import express from "express";
import fieldRouter from "./field_router.js";
import reportRouter from "./report_router.js";
import transactionDetailRouter from "./transaction_detail_router.js";
import transactionRouter from "./transaction_router.js";
import userRouter from "./user_router.js";

const routes = express();

routes.use("/admin", userRouter);
routes.use("/field", fieldRouter);
routes.use("/transaction", transactionRouter);
routes.use("/transaction-detail", transactionDetailRouter);
routes.use("/report", reportRouter);

export default routes;
