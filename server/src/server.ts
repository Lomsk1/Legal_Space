import dotenv from "dotenv";
import app from "./app";

dotenv.config();

// process.on("uncaughtException", (err) => {
//   console.log(err.name, err.message);
//   console.log("UNCAUGHT REJECTION! Shutting down...");
// pool.end()
//   process.exit(1);
// });

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// process.on("unhandledRejection", (err: any) => {
//   console.log(err.name, err.message);
//   console.log("UNHANDLED REJECTION! Shutting down...");
// pool.end()
//   server.close(() => {
//     process.exit(1);
//   });
// });
