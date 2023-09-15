"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horarios_1 = require("../controllers/horarios");
const router = (0, express_1.Router)();
router.get("/", horarios_1.getHorarios);
exports.default = router;
