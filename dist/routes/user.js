"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.post("/", usuario_1.newUsuario);
router.post("/login", usuario_1.loginUsuario);
exports.default = router;
