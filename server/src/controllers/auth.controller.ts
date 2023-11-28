import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
// import Email from "../utils/email";
import AppError from "../utils/appErrors";
import User, { UserDoc } from "../models/auth/auth.model";

dotenv.config();

const signToken = (id: string, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (
  user: UserDoc,
  statusCode: number,
  res: Response,
  req: Request
) => {
  const token = signToken(user.id, user.email, user.role);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() +
        parseInt(process.env.JWT_COOKIE_EXPIRES_IN!) * 24 * 60 * 60 * 1000
    ),
    // httpOnly: true,
    sameSite: "none",
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  //   Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

export const signUp = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const newUser = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    // const url = `${req.protocol}://${req.get("host")}/me`;

    // await new Email(newUser, url).sendWelcome();

    createSendToken(newUser, 201, res, req);
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // 1) check if email and password exist
    if (!email || !password) {
      return next(new AppError("Please, enter Email and Password", 400));
    }
    // 2) check if user exist && password is correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect Email or Password", 401));
    }

    // 3) if everything is OK, send token to client
    createSendToken(user, 200, res, req);
  }
);
