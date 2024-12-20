import express, { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

const userController = {
  me: async (req: Request, res: Response) => {
    const user_id = req.user_id;
    try {
      const user = await User.findById(user_id).select("-password");
      if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
      }
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  },
  update: async (req: Request, res: Response) => {
    const user_id = req.user_id;
    const updates = req.body;

    try {
      const user = await User.findByIdAndUpdate(user_id, updates, {
        new: true,
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  },
  changePassword: async (req: Request, res: Response) => {
    const user_id = req.user_id;
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
      res.status(400).json({ message: "New passwords do not match" });
      return;
    }

    try {
      const user = await User.findById(user_id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Current password is incorrect" });
        return;
      }

      user.password = newPassword;
      await user.save();

      res.json({ message: "Password changed successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  getNumsBookingChanged: async (req: Request, res: Response) => {
    const user_id = req.user_id;
    try {
      const user = await User.findById(user_id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json({ nums_book_changed: user.nums_booking_changed });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error when get user" });
    }
  },

  clearNumsBookingChanged: async (req: Request, res: Response) => {
    const user_id = req.user_id;
    try {
      const user = await User.findById(user_id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      user.nums_booking_changed = 0;
      await user.save();
      res.json({ message: "Clear nums booking changed successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error when clear nums booking changed" });
    }
  },
};

export default userController;
