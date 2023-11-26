import express from "express";
import {
  createAttorney,
  deleteAttorney,
  getAllAttorneys,
  updateAttorney,
} from "../controllers/attorney.controller";
import { uploadAttorneyPhoto } from "../middleware/multer";

const attorneyRoute = express.Router();

attorneyRoute
  .route("/")
  .get(getAllAttorneys)
  .post(uploadAttorneyPhoto, createAttorney);
attorneyRoute
  .route("/:id")
  .patch(uploadAttorneyPhoto, updateAttorney)
  .delete(deleteAttorney);

export default attorneyRoute;
