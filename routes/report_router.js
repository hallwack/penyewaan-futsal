import express from "express";
import {
  reportDay,
  reportMonth,
  reportWeek,
  reportYear,
} from "../controller/report_controller.js";

const reportRouter = express.Router();

reportRouter.get("/day", reportDay);
reportRouter.get("/week", reportWeek);
reportRouter.get("/month", reportMonth);
reportRouter.get("/year", reportYear);

export default reportRouter;
