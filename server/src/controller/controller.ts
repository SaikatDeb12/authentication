import { User } from "../model/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handleRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = await req.body;
    if (!name || !email || !password) {
      res.status(400).json({ msg: "Enter all the details" });
      return;
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists!" });
      return;
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign(
      { newUser: newUser._id },
      process.env.JWT_SECRET as string
    );
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error!" });
  }
};

const handleLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ msg: "Enter all the details" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: "Invalid credentials" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { user: user._id },
      process.env.JWT_SECRET as string
    );
    console.log("token: ", token);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export { handleRegister, handleLogin };
