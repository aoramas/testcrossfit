const express = require("express");
const {
    getAsignacionHorarios,
    getAsignacionHorariosById,
    createAsignacionHorarios,
    updateAsignacionHorarios,
    deleteAsignacionHorarios,
} = require("../services/asignacion_horarios.service");

const router = express.Router();

router.get("/", getAsignacionHorarios);
router.get("/:id", getAsignacionHorariosById);
router.post("/", createAsignacionHorarios);
router.put("/:id", updateAsignacionHorarios);
router.delete("/:id", deleteAsignacionHorarios);

module.exports = router;


