import express from "express";
import {
  createAttorney,
  createAttorneyContent,
  deleteAttorney,
  deleteAttorneyContent,
  getAllAttorneyContent,
  getAllAttorneys,
  updateAttorney,
  updateAttorneyContent,
} from "../controllers/attorney.controller";
import { uploadAttorneyPhoto } from "../middleware/multer";

const attorneyRoute = express.Router();

/* Main */
attorneyRoute
  .route("/")
  .get(getAllAttorneys)
  .post(uploadAttorneyPhoto, createAttorney);
attorneyRoute
  .route("/:id")
  .patch(uploadAttorneyPhoto, updateAttorney)
  .delete(deleteAttorney);

/* Content */
attorneyRoute
  .route("/content")
  .get(getAllAttorneyContent)
  .post(createAttorneyContent);
attorneyRoute
  .route("/content/:id")
  .patch(updateAttorneyContent)
  .delete(deleteAttorneyContent);

export default attorneyRoute;
