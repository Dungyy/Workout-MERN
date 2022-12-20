import express, { json } from "express";
import connectDB from "./config/db.js";

// express app
const app = express();
import router from "./routes/workouts.js";

// Middleware
app.use(json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api", router);

//connect Database
connectDB();

