import express from "express";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/sewa-futsal");
const app = express();
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connection Connected"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8000, () =>
  console.log(`server is running on ${process.env.PORT || 8000}`)
);
