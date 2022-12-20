// GET SINGLE WORKOUT
const getWorkout = (req, res) => {};

// GET ALL WORKOUTS
const getWorkouts = (req, res) => {};

// POST
const createWorkout = async (req, res) => {
  const { title, date, comment, body } = req.body;

  try {
    const workout = await Workouts.create({ title, date, comment, body });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT
const editWorkout = (req, res) => {};

// DELETE
const deleteWorkout = (req, res) => {};

export default {
  getWorkout,
  getWorkouts,
  createWorkout,
  editWorkout,
  deleteWorkout,
};
