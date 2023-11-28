import express from "express";
import { login, signUp } from "../controllers/auth.controller";

const authRoute = express.Router();

authRoute.route("/login").post(login);
authRoute.route("/signup").post(signUp);

export default authRoute;
