import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();


router.get("/me", verifyToken, async (req: Request, res: Response) =>  {
    const userId = req.userId;
  
    try {
      const user = await User.findById(userId).select("-password");
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "something went wrong" });
    }
  });

/**
 * @route POST /api/users/register
 * @desc Register a new user and return a JWT token
 * @access Public
 * @param {Request} req - The request object containing user data
 * @param {Response} res - The response object to send data back
 */
router.post(
    "/register",
    [
      check("email", "Email is required").isEmail(),
      check("password", "Password with 6 or more characters required").isLength({
        min: 6,
      }),
      check("fullname", "Fullname is required").isString(),
      check("role", "Role is required").isIn(["Customer", "Admin"]),
      check("passport")
      .isLength({ min: 6, max: 9 }).withMessage('Passport must be between 6 and 9 characters long')
      .matches("^[A-Za-z0-9]+$").withMessage('Passport must contain only letters and numbers'),
    ] // Validate user input
    ,
    async (req: Request, res: Response) => {
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
    }
  );


export default router;