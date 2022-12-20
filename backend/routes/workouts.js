import { Router } from "express";
import Workouts from "../models/workoutSchema.js";
const router = Router();
import createWorkout from "../controller/WorkoutController.js";

//GET
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

//GET
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

//POST
router.post("/", createWorkout);

//DELETE
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE workout" });
});

//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ msg: "EDIT workout" });
});

export default router;
