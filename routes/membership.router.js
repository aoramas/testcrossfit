const express = require("express");
const {
  getMembership,
  getMembershipById,
  createMembership,
  updateMembership,
  deleteMembership,
} = require("../services/membership.service");

const router = express.Router();

router.get("/", getMembership);
router.get("/:id", getMembershipById);
router.post("/", createMembership);
router.put("/:id", updateMembership);
router.delete("/:id", deleteMembership);

module.exports = router;
