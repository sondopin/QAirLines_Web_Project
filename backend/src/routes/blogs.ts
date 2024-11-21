import express from "express";
import BlogController from "../controllers/blogs";

const router = express.Router();
router.get("/get-all", BlogController.getAllBlogs);
router.get("/get-latest", BlogController.getLatestBlogs);
router.get("/get/:id", BlogController.getBlogById);

export default router;
