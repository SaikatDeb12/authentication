import express from "express";
import {
  handleGetUser,
  handleLogin,
  handleRegister,
} from "../controller/controller";
import authMiddleware from "../middleware/authMiddleware";
const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/user", authMiddleware, handleGetUser);
export default router;
