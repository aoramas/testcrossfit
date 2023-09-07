const express = require("express");
const {
    getHorarios,
    getHorariosById,
    createHorarios,
    updateHorarios,
    deleteHorarios,
} = require("../services/user.service");

const router = express.Router();

router.get("/", getHorarios);
router.get("/:id", getHorariosById);
router.post("/", createHorarios);
router.put("/:id", updateHorarios);
router.delete("/:id", deleteHorarios);

module.exports = router;