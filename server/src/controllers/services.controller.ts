import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import pool from "../db/db";
import AppError from "../utils/appErrors";

export const getAllServices = catchAsync(
  async (_req: Request, res: Response, next: NextFunction) => {
    const data = await pool.query("SELECT * FROM public.services");

    if (!data) next(new AppError("No data found", 404));
    console.log(data);

    res.status(200).json({
      status: "success",
      result: data.rowCount,
      data: data.rows,
    });
  }
);
