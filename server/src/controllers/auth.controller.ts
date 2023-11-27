// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import { NextFunction, Request, Response } from "express";
// import { catchAsync } from "../utils/catchAsync";
// import AppError from "../utils/appErrors";
// import pool from "../db/db";

// dotenv.config();

// declare global {
//   namespace Express {
//     interface Request {
//       user?: any;
//     }
//   }
// }

// const signToken = (id: number) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

// const createSendToken = (
//   user: any,
//   statusCode: number,
//   res: Response,
//   req: Request
// ) => {
//   const token = signToken(user.id);

//   res.cookie("jwt", token, {
//     secure: req.secure || req.headers["x-forwarded-proto"] === "https",
//   });
//   // secure: req.secure || req.headers["x-forwarded-proto"] === "https",

//   //   Remove password from output
//   user.password = undefined;

//   res.status(statusCode).json({
//     status: "success",
//     token,
//     data: {
//       user,
//     },
//   });
// };

// export const login = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { email, password } = req.body;

//     // 1) check if email and password exist
//     if (!email || !password) {
//       return next(new AppError("გთხოვთ შეიყვანოთ იმეილი და პაროლი", 400));
//     }
//     // 2) check if user exist && password is correct
//     //   const user = await User.findOne({ email }).select("+password");
//     const user = await pool.query(
//       `SELECT * FROM public.services_content WHERE email = ${email}`
//     );

//     if (!user || !(await user.correctPassword(password, user.password))) {
//       return next(new AppError("არასწორი იმეილი ან პაროლი", 401));
//     }

//     // 3) if everything is OK, send token to client
//     createSendToken(user, 200, res, req);
//   }
// );
