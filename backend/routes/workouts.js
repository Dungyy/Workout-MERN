const express = require("express");
const Workouts = require("../models/workoutSchema");
const router = express.Router();

//GET
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

//GET
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

//POST
router.post("/", async (req, res) => {
  const { title, reps, comment, body } = req.body;

  try {
    const workout = await Workouts.create({ title, reps, comment, body });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ msg: "POST new workout" });
});

//DELETE
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE workout" });
});

//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ msg: "EDIT workout" });
});

module.exports = router;
