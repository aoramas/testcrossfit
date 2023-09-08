const express = require("express");
const {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../services/student.service");
const router = express.Router();

router.get("/", getStudent);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
