import express from "express";
import {
  addField,
  deleteField,
  getField,
  getFieldById,
  updateField,
} from "../controller/field_controller.js";

const fieldRouter = express.Router();

fieldRouter.get("/", getField);
fieldRouter.get("/:id", getFieldById);
fieldRouter.post("/", addField);
fieldRouter.patch("/:id", updateField);
fieldRouter.delete("/:id", deleteField);

export default fieldRouter;
