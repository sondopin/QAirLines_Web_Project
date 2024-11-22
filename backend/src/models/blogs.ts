import mongoose from "mongoose";
import { BlogType } from "./types";

// Blog schema
const blogSchema = new mongoose.Schema<BlogType>({
  content: { type: String },
  header: { type: String },
  footer: { type: String },
  title: { type: String },
  description: { type: String },
  image_url: { type: String },
});

const Blog = mongoose.model<BlogType>("Blog", blogSchema);
export default Blog;
