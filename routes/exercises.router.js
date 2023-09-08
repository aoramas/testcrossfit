const express = require("express");

const {
  getExercises,
  getExercisesById,
  createExercises,
  updateExercises,
  deleteExercises,
} = require("../services/exercises.service");

const router = express.Router();

router.get("/", getExercises);
router.get("/:id", getExercisesById);
router.post("/", createExercises);
router.put("/:id", updateExercises);
router.delete("/:id", deleteExercises);

module.exports = router;
