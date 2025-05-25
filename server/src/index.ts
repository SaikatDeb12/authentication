import express, { json } from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db";
dotenv.config();

connectDB();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.listen(process.env.PORT, () =>
  console.log(`Server started at PORT ${process.env.PORT}`)
);
