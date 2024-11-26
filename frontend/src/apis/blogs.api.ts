import { Blog } from "../types/blogs.type";
import http from "../utils/http";

export const getLatestBlogs = async () => {
  return http.get<Blog[]>("/blogs/get-latest");
};

export const getAllBlogs = async () => {
  return http.get<Blog[]>("/blogs/get-all");
};

export const getBlogById = async (id: string) => {
  return http.get<Blog>(`/blogs/get/${id}`);
};
