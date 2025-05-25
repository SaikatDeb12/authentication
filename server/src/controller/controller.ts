import { User } from "../model/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const handleRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = await req.body;
    if (!name || !email || !password) {
      res.status(400).json({ msg: "All details not provided!" });
      return;
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists!" });
      return;
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign(newUser._id, process.env.JWT_SECRET as string);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error!" });
  }
};

const handleLogin = () => {};
export { handleRegister, handleLogin };
