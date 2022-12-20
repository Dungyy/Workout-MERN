import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Your Obj needs a Title!"],
    },
    date: {
      type: Number,
      required: [true, "Please enter day from Mon-Sun"],
    },
    body: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Workout", workoutSchema);
