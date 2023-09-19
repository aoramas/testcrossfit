"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = exports.newUsuario = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Usuario_1 = require("../models/Usuario");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identificacion, nombres, apellidos, username, password, email, telefono, direccion, fechaInicio, idRol, estado, } = req.body;
    const usuario = Usuario_1.Usuario.findOne({
        where: {
            username: username,
        },
    });
    if (!usuario) {
        return res.status(400).json({
            msg: `El usuario ${username} ya existe`,
        });
    }
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield Usuario_1.Usuario.create({
            identificacion,
            nombres,
            apellidos,
            username,
            password: hashPassword,
            email,
            telefono,
            direccion,
            fechaInicio,
            idRol,
            estado,
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Error al crear el usuario",
            error,
        });
    }
});
exports.newUsuario = newUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const usuario = yield Usuario_1.Usuario.findOne({
        where: {
            username: username,
        },
    });
    if (!usuario) {
        return res.status(400).json({ msg: "El usuario ingresado no existe" });
    }
    const passwordValid = bcrypt_1.default.compare(password, usuario.password);
    if (!(yield passwordValid.valueOf())) {
        return res.status(400).json({ msg: "contraseña incorrecto" });
    }
    const token = jsonwebtoken_1.default.sign({ user: usuario }, "secret");
    return res.json({ userToken: token });
});
exports.loginUsuario = loginUsuario;
