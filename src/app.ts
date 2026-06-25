import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { envVars } from "./app/config/env";
import cookieParser from "cookie-parser";
import router from "./app/router";
import { globalErrorhandelar } from "./app/middleware/globalErrorHandler";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", envVars.FRONTEND_URL],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message:
      "Welcome to bookstore, an e-commerce platform for daily accessories",
  });
});
app.use(globalErrorhandelar);
export default app;
