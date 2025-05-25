import express from "express";
import { handleLogin, handleRegister } from "../controller/controller";
const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
export default router;
