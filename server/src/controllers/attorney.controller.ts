import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import pool from "../db/db";
import AppError from "../utils/appErrors";
import cloudinary from "../middleware/cloudinary";
import fs from "fs";
import path from "path";

export const getAllAttorneys = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const lang = req.query.lang || "eng";
    const data = await pool.query(
      `SELECT * FROM public.attorney_content WHERE lang = '${lang}'`
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

export const createAttorney = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      title,
      description,
      lang,
      attorney_id,
      name,
      instagram,
      facebook,
      linkedin,
    } = req.body;

    // Access image data from req.file.buffer
    // const imageData = req.file ? req.file.buffer : null;
    let imageData = null;

    if (!title || !description || !lang || !attorney_id || !name) {
      return next(
        new AppError(
          "Title, description, attorney_id, name and lang are required.",
          400
        )
      );
    }

    // Insert data into the services_content table
    const result = await pool.query(
      "INSERT INTO public.attorney_content (title, description, lang, attorney_id, name, image, instagram, facebook, linkedin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        title,
        description,
        lang,
        attorney_id,
        name,
        imageData,
        instagram,
        facebook,
        linkedin,
      ]
    );

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/attorney");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Legal_Space/Attorneys",
      });

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      imageData = cloudImage;

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    const finalResult = await pool.query(
      `UPDATE public.attorney_content SET image = $1 WHERE id = $2 RETURNING *`,
      [imageData, result.rows[0].id]
    );

    // Extract the inserted row
    const createdService = finalResult.rows[0];

    res.status(201).json({
      status: "success",
      createdService,
    });
  }
);

export const updateAttorney = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const {
      title,
      description,
      lang,
      attorney_id,
      name,
      instagram,
      facebook,
      linkedin,
    } = req.body;

    let imageData = null;

    const setClause = [];
    const values = [];

    if (title) {
      setClause.push(`title = $${values.length + 1}`);
      values.push(title);
    }

    if (description) {
      setClause.push(`description = $${values.length + 1}`);
      values.push(description);
    }

    if (lang) {
      setClause.push(`lang = $${values.length + 1}`);
      values.push(lang);
    }

    if (attorney_id) {
      setClause.push(`attorney_id = $${values.length + 1}`);
      values.push(attorney_id);
    }
    if (name) {
      setClause.push(`name = $${values.length + 1}`);
      values.push(name);
    }
    if (instagram) {
      setClause.push(`instagram = $${values.length + 1}`);
      values.push(instagram);
    }
    if (facebook) {
      setClause.push(`facebook = $${values.length + 1}`);
      values.push(facebook);
    }
    if (linkedin) {
      setClause.push(`linkedin = $${values.length + 1}`);
      values.push(linkedin);
    }

    const result = await pool.query(
      `UPDATE public.attorney_content SET ${setClause.join(", ")} WHERE id = $${
        values.length + 1
      } RETURNING *`,
      [...values, id]
    );

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/attorney");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Legal_Space/Attorneys",
      });

      if (result.rows[0].image?.public_id) {
        await cloudinary.uploader.destroy(result.rows[0].image?.public_id);
      }

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      imageData = cloudImage;

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    const finalResult = await pool.query(
      `UPDATE public.attorney_content SET image = $1 WHERE id = $2 RETURNING *`,
      [imageData, id]
    );

    // Check if the row was successfully updated
    if (finalResult.rowCount === 0) {
      return next(
        new AppError("No matching service found for the provided ID.", 404)
      );
    }

    // Extract the updated row
    const updatedService = finalResult.rows[0];

    res.status(200).json({
      status: "success",
      updatedService,
    });
  }
);

export const deleteAttorney = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const attorneyData = await pool.query(
      `SELECT * FROM public.attorney_content WHERE id = '${id}'`
    );

    const attorney = attorneyData.rows[0];

    if (attorney.image?.public_id) {
      await cloudinary.uploader.destroy(attorney.image?.public_id);
    }
    const result = await pool.query(
      `DELETE FROM public.attorney_content WHERE id = $1 RETURNING *`,
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
