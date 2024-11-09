import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";


const authController = {
    'login':
        async (req: Request, res: Response) => {
            // Check for errors
            const errors = validationResult(req);
           if (!errors.isEmpty()) {
            res.status(400).json({ message: errors.array() });
            }

            const { email, password } = req.body;

            // Find user in database
            try {
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ message: "Invalid Credentials" });
                return;
            }

            // Check if password is match with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials" });
                return;
            }

            // Create token with id and role
            const token = jwt.sign(
                { userId: user.id, role: user.role },
                process.env.JWT_SECRET_KEY as string,
                {
                expiresIn: "1d",
                }
            );

            // Save token in web browcookie
            res.cookie("auth_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 86400000,
            });
            res.status(200).json({ userId: user._id });
            } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong" });
            }
        },
    'validateToken': (req: Request, res: Response) => {
        res.status(200).send({ userId: req.userId });
      },
    'logout': (req: Request, res: Response) => {
        res.cookie("auth_token", "", {
          expires: new Date(0),
        });
        res.send();
    }
}


export default authController;