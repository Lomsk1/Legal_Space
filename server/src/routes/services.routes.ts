import express from "express";
import {
  createServices,
  deleteService,
  getAllServices,
  updateServices,
} from "../controllers/services.controller";

const servicesRoute = express.Router();

servicesRoute.route("/").get(getAllServices).post(createServices);
servicesRoute.route("/:id").patch(updateServices).delete(deleteService)

export default servicesRoute;
