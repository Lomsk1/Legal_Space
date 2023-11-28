import express from "express";
import {
  createServiceContent,
  createServices,
  deleteService,
  deleteServiceContent,
  getAllServiceContent,
  getAllServices,
  updateServiceContent,
  updateServices,
} from "../controllers/services.controller";

const servicesRoute = express.Router();

/* Service */
servicesRoute.route("/").get(getAllServices).post(createServices);
servicesRoute.route("/:id").patch(updateServices).delete(deleteService);

/* Service Content */
servicesRoute
  .route("/content")
  .get(getAllServiceContent)
  .post(createServiceContent);
servicesRoute
  .route("/content/:id")
  .patch(updateServiceContent)
  .delete(deleteServiceContent);

export default servicesRoute;
