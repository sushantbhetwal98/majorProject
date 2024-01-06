import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed!!!", err);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on http://localhost:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// };
