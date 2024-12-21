import { Request, Response } from "express";
import Blog from "../models/blogs";
import { get } from "http";

const BlogController = {
  getAllBlogs: async (req: Request, res: Response) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  },

  getLatestBlogs: async (req: Request, res: Response) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  },

  getBlogById: async (req: Request, res: Response) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  },

  uploadBlog: async (req: Request, res: Response) => {
    const { title, subtitle, content } = req.body;
    const new_blog = new Blog({
      title,
      subtitle,
      content,
      cover_url: req.file ? req.file.filename : undefined,
    });
    await new_blog.save();
    res.status(200).json("Created new blog successfully");
  },

  updateBlog: async (req: Request, res: Response) => {
    const { title, subtitle, content } = req.body;
    try {
      const blog = await Blog.findById(req.params.id);
      const updated_blog = await Blog.findByIdAndUpdate(req.params.id, {
        title,
        subtitle,
        content,
        cover_url: req.file ? req.file.filename : blog?.cover_url,
      });
      res.status(200).json("Updated blog successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default BlogController;
