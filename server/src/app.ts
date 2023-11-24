import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import servicesRoute from "./routes/services.routes";

dotenv.config();

const app = express();

app.options("*", cors());

app.use(express.json());

/* Routes */
app.use("/api/v1/services", servicesRoute);

export default app;
