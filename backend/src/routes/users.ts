import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";
import userController from "../controllers/users";

const router = express.Router();


router.get("/me", verifyToken, userController.me);

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
    , userController.register
);

router.put('/me', verifyToken, userController.update);

router.put('/change-password', verifyToken, [
  check("currentPassword", "Current password is required").notEmpty(),
  check(
    "newPassword",
    "New password with 6 or more characters required"
  ).isLength({
    min: 6,
  }),
  check("confirmNewPassword", "Confirm new password is required").notEmpty(),
], userController.changePassword);

export default router;