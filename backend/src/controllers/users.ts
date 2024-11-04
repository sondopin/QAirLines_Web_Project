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
        }

        // Find user in database
        try {
        let user = await User.findOne({
            email: req.body.email,
        });

        if (user) {
            res.status(400).json({ message: "User already exists" });
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
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "something went wrong" });
        }
      }
}

export default userController;