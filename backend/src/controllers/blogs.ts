import { Request, Response } from "express";
import Blog from "../models/blogs";
import { get } from "http";

const BlogController = {
  getAllBlogs: async (req: Request, res: Response) => {
    const blogs = await Blog.find();
    res.json(blogs);
  },

  getLatestBlogs: async (req: Request, res: Response) => {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(4);
    res.json(blogs);
  },

  getBlogById: async (req: Request, res: Response) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  },
};

export default BlogController;
