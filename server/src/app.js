import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.PORT,
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

export { app };
