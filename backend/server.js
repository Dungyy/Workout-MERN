require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

// express app
const app = express();
const workoutRoutes = require("./routes/workouts");

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workout",workoutRoutes);


//connect Database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`connected to DB and Listening on Port ${PORT}`);
      });
})
.catch((error) => {
    console.log(error)
    process.exit(1)
})


// Listening on Server / Port

