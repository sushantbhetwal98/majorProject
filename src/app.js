import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//middlewares-cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// middleware to json files
app.use(
  express.json({
    limit: "16kb",
  })
);
// api-url
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
// middleware for sttic files
app.use(express.static("public"));
// middleawre cookie-parser
app.use(cookieParser());

export { app };
