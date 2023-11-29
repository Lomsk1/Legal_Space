import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import servicesRoute from "./routes/services.routes";
import { errorController } from "./controllers/error/error.controller";
import attorneyRoute from "./routes/attorney.routes";
import authRoute from "./routes/auth.routes";
import blogRoute from "./routes/blog.routes";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "https://www.legalspace.ge",
      "https://legalspace.ge",
    ],
  })
);

app.options("*", cors());

app.use(express.json());

/* Routes */
app.use("/api/v1/services", servicesRoute);
app.use("/api/v1/attorney", attorneyRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/blog", blogRoute);

app.use(errorController);

export default app;
