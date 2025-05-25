import express, { json } from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db";
dotenv.config();

connectDB();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
