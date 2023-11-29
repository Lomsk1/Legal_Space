import express from "express";
import {
  createBlog,
  createBlogContent,
  deleteBlog,
  deleteBlogContent,
  getAllBlogContent,
  getAllBlogs,
  getOneBlogContent,
  updateBlog,
  updateBlogContent,
} from "../controllers/blog.controller";
import { uploadBlogPhoto } from "../middleware/multer";

const blogRoute = express.Router();

/* Main */
blogRoute.route("/").get(getAllBlogs).post(uploadBlogPhoto, createBlog);
blogRoute.route("/:id").patch(uploadBlogPhoto, updateBlog).delete(deleteBlog);

/* Content */
blogRoute.route("/content").get(getAllBlogContent).post(createBlogContent);
blogRoute
  .route("/content/:id")
  .patch(updateBlogContent)
  .delete(deleteBlogContent)
  .get(getOneBlogContent);

export default blogRoute;
