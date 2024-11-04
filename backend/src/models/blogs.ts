import mongoose from "mongoose";
import { BlogType } from "./types";

// Blog schema
const blogSchema = new mongoose.Schema<BlogType>({
    content: { type: String, required: true },
    header: { type: String, required: true },
    footer: { type: String },
  });

const Blog = mongoose.model<BlogType>("Blog", blogSchema);
export default Blog;