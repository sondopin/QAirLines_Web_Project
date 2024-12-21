import mongoose from "mongoose";
import { BlogType } from "./types";

// Blog schema
const blogSchema = new mongoose.Schema<BlogType>({
  content: { type: String },
  title: { type: String },
  cover_url: { type: String },
  subtitle: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model<BlogType>("Blog", blogSchema);
export default Blog;
