import { log } from "console";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user_id: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "") || "";
  if (!token) {
    res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.user_id = (decoded as JwtPayload).user_id;
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
  }
};

export default verifyToken;