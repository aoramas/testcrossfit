const express = require("express");
const {
    getRol,
    getRolbyId,
    createRol,
    updateRol,
    deleteRol,
} = require("../services/rol.service");

const router = express.Router();

router.get("/", getRol);
router.get("/:id", getRolbyId);
router.post("/", createRol);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);

module.exports = router;