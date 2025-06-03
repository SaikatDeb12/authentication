import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer", "");
  if (!token) {
    res.status(401).json({ msg: "No token authorization denied" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    req.user = decoded.userId;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;
