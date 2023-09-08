const express = require("express");
const {
  getWodEjercicios,
  getWodEjerciciosById,
  createWodEjercicios,
  updateWodEjercicios,
  deleteWodEjercicios,
} = require("../services/wodEjercicios.service");

const router = express.Router();

router.get("/", getWodEjercicios);
router.get("/:id", getWodEjerciciosById);
router.post("/", createWodEjercicios);
router.put("/:id", updateWodEjercicios);
router.delete("/:id", deleteWodEjercicios);

module.exports = router;
