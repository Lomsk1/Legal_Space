import express from "express";
import { getMe, getUser, login, signUp } from "../controllers/auth.controller";
import { protect } from "../middleware/protected";

const authRoute = express.Router();

authRoute.route("/login").post(login);
authRoute.route("/signup").post(signUp);

authRoute.get("/me", protect, getMe, getUser);

export default authRoute;
