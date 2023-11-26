import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import servicesRoute from "./routes/services.routes";
import { errorController } from "./controllers/error/error.controller";
import attorneyRoute from "./routes/attorney.routes";

dotenv.config();

const app = express();

app.options("*", cors());

app.use(express.json());

/* Routes */
app.use("/api/v1/services", servicesRoute);
app.use("/api/v1/attorney", attorneyRoute);

app.use(errorController);

export default app;
