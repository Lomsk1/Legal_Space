import { NextFunction, Request, Response } from "express";
import Service from "../models/service/service.model";
import ServiceContent from "../models/service/serviceContent.model";
import { catchAsync } from "../utils/catchAsync";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./common/factory.controller";
import mongoose from "mongoose";
import AppError from "../utils/appErrors";

/* Service Content */
export const getAllServiceContent = getAll(ServiceContent);

export const createServiceContent = createOne(ServiceContent);

export const updateServiceContent = updateOne(ServiceContent);

export const deleteServiceContent = deleteOne(ServiceContent);

/* Services */

export const getAllServices = getAll(Service);

export const createServices = createOne(Service);

export const updateServices = updateOne(Service);

export const deleteService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const data = await Service.findByIdAndDelete(req.params.id).session(
        session
      );

      if (!data) {
        return next(new AppError("No Document found with that ID", 404));
      }

      await ServiceContent.find({ blog_id: data.id })
        .deleteMany()
        .session(session);
      await session.commitTransaction();

      res.status(204).json({
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
