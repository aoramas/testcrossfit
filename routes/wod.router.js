const express = require("express");
const {
  getWod,
  getWodById,
  createWod,
  updateWod,
  deleteWod,
} = require("../services/wod.services");

const router = express.Router();

router.get("/", getWod);
router.get("/:id", getWodById);
router.post("/", createWod);
router.put("/:id", updateWod);
router.delete("/:id", deleteWod);

module.exports = router;
