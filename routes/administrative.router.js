const express = require("express");
const {
  getAdmin,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../services/administrative.sevice");

const router = express.Router();

router.get("/", getAdmin);
router.get("/:id", getAdminById);
router.post("/", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
