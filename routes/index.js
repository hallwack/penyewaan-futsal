import express from "express";
import fieldRouter from "./field_router.js";
import userRouter from "./user_router.js";

const routes = express();

routes.use("/user", userRouter);
routes.use("/field", fieldRouter);

export default routes;
