import express from "express";
import { getAllServices } from "../controllers/services.controller";

const servicesRoute = express.Router();

servicesRoute.route("/").get(getAllServices);
//   .post(protect, restrictTo("editor", "admin"), createIngredient);

export default servicesRoute;
