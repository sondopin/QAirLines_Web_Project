import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const userController = {
    'register': async (req: Request, res: Response) => {
        // Check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ message: errors.array() });  
            return;
        }

        // Find user in database
        try {
        let user = await User.findOne({
            email: req.body.email,
        });

        if (user) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        // Create new user
        user = new User(req.body);
        await user.save();

        // Create token
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY as string,
            {
            expiresIn: "1d",
            }
        );

        // Save the token into web browser's cookie for authenticate user
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });
        res.status(200).send({ message: "User registered OK" });
        return;
        } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong" });
        }
    },

    'me': async (req: Request, res: Response) =>  {
        const userId = req.userId;
        try {
            const user = await User.findById(userId).select("-password");
            if (!user) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "something went wrong" });
        }
      },
    'update': async (req: Request, res: Response) => {
        const userId = req.userId;
        const updates = req.body;
      
        try {
          const user = await User.findByIdAndUpdate(userId, updates, { new: true });
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
    'changePassword': async (req: Request, res: Response) => {
        const userId = req.userId;
        const { currentPassword, newPassword, confirmNewPassword } = req.body;
    
        if (newPassword !== confirmNewPassword) {
           res.status(400).json({ message: "New passwords do not match" });
           return;
        }
    
        try {
          const user = await User.findById(userId);
          if (!user) {
             res.status(404).json({ message: "User not found" });
             return;
          }
    
          const isMatch = await bcrypt.compare(currentPassword, user.password);
          if (!isMatch) {
            res
              .status(400)
              .json({ message: "Current password is incorrect" });
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
}

export default userController;