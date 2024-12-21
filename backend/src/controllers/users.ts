import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

const userController = {
  // Get current user's profile, excluding the password
  me: async (req: Request, res: Response) => {
    const user_id = req.user_id; 
    try {
      const user = await User.findById(user_id).select("-password"); // Find user by ID, excluding password
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

  // Update user's profile with the provided data
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

  // Change user's password
  changePassword: async (req: Request, res: Response) => {
    const user_id = req.user_id; 
    const { currentPassword, newPassword, confirmNewPassword } = req.body; 

    // Ensure the new passwords match
    if (newPassword !== confirmNewPassword) {
      res.status(400).json({ message: "New passwords do not match" });
      return;
    }

    try {
      const user = await User.findById(user_id); // Find user by ID
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      // Compare the current password with the user's stored password
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

  // Get the number of times the user's booking has been changed
  getNumsBookingChanged: async (req: Request, res: Response) => {
    const user_id = req.user_id; 
    try {
      const user = await User.findById(user_id); 
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json({ nums_book_changed: user.nums_booking_changed }); // Respond with the number of booking changes
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error when getting user" });
    }
  },

  // Clear the number of times the user's booking has been changed
  clearNumsBookingChanged: async (req: Request, res: Response) => {
    const user_id = req.user_id; 
    try {
      const user = await User.findById(user_id); 
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      user.nums_booking_changed = 0; // Reset the number of booking changes
      await user.save(); 

      res.json({ message: "Clear nums booking changed successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error when clearing nums booking changed" });
    }
  },
};

export default userController;
