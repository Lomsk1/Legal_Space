import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import cloudinary from "../middleware/cloudinary";
import fs from "fs";
import path from "path";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./common/factory.controller";
import AppError from "../utils/appErrors";
import BlogContent from "../models/blog/blogContent.model";
import Blog from "../models/blog/blog.model";
import mongoose from "mongoose";

/* Main */
export const getAllBlogs = getAll(Blog);
export const getBlogById = getOne(Blog);

export const createBlog = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    let createdData = req.body;

    const data = await Blog.create(createdData);

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/product");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Legal_Space/Blog",
      });

      if (createdData.image?.public_id) {
        await cloudinary.uploader.destroy(createdData.image.public_id);
      }

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.image = cloudImage;
      data.save({ validateBeforeSave: false });

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    res.status(201).json({
      status: "success",
      data,
    });
  }
);

export const updateBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    let updatedData = { ...body };

    const data = await Blog.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return next(new AppError("No document found with that ID", 404));
    }

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/product");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Legal_Space/Blog",
      });

      if (data.image?.public_id) {
        await cloudinary.uploader.destroy(data.image.public_id);
      }

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.image = cloudImage;
      data.save({ validateBeforeSave: false });

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    res.status(200).json({
      status: "success",
      data,
    });
  }
);
export const deleteBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const data = await Blog.findByIdAndDelete(req.params.id).session(session);

      if (!data) {
        return next(new AppError("No Document found with that ID", 404));
      }
      if (data.image?.public_id) {
        await cloudinary.uploader.destroy(data.image.public_id);
      }

      await BlogContent.find({ blog_id: data.id })
        .deleteMany()
        .session(session);
      await session.commitTransaction();

      res.status(200).json({
        status: "success",
      });
    } catch (error) {
      await session.abortTransaction();
      next(error);
    } finally {
      session.endSession();
    }
  }
);

/* Content */
export const getAllBlogContent = getAll(BlogContent);
export const getOneBlogContent = getOne(BlogContent);
export const createBlogContent = createOne(BlogContent);
export const updateBlogContent = updateOne(BlogContent);
export const deleteBlogContent = deleteOne(BlogContent);
