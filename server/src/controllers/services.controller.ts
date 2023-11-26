import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import pool from "../db/db";
import AppError from "../utils/appErrors";

export const getAllServices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const lang = req.query.lang || "eng";
    const data = await pool.query(
      `SELECT * FROM public.services_content WHERE lang = '${lang}'`
    );

    if (data.rowCount === 0) {
      return next(new AppError("No data found", 404));
    }

    res.status(200).json({
      status: "success",
      result: data.rowCount,
      data: data.rows,
    });
  }
);

export const createServices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, lang, service_id } = req.body;

    if (!title || !description || !lang || !service_id) {
      return next(
        new AppError(
          "Title, description, service_id and lang are required.",
          400
        )
      );
    }

    // Insert data into the services_content table
    const result = await pool.query(
      "INSERT INTO public.services_content (title, description, lang, service_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, lang, service_id]
    );

    // Extract the inserted row
    const createdService = result.rows[0];

    res.status(201).json({
      status: "success",
      createdService,
    });
  }
);

export const updateServices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, description, lang, service_id } = req.body;

    const setClause = [];
    const values = [];

    if (title) {
      setClause.push("title = $1");
      values.push(title);
    }

    if (description) {
      setClause.push("description = $2");
      values.push(description);
    }

    if (lang) {
      setClause.push("lang = $3");
      values.push(lang);
    }

    if (service_id) {
      setClause.push("service_id = $4");
      values.push(service_id);
    }

    const result = await pool.query(
      `UPDATE public.services_content SET ${setClause.join(", ")} WHERE id = $${
        values.length + 1
      } RETURNING *`,
      [...values, id]
    );

    // Check if the row was successfully updated
    if (result.rowCount === 0) {
      return next(
        new AppError("No matching service found for the provided ID.", 404)
      );
    }

    // Extract the updated row
    const updatedService = result.rows[0];

    res.status(200).json({
      status: "success",
      updatedService,
    });
  }
);

export const deleteService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const result = await pool.query(
      `DELETE FROM public.services_content WHERE id = $1 RETURNING *`,
      [id]
    );
    if (!result) {
      return next(new AppError("No Document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
    });
  }
);
