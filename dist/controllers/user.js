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
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identificacion, nombres, apellidos, username, password, email, telefono, direccion, fechaInicio, idRol, estado, } = req.body;
    const user = user_1.User.findOne({
        where: {
            username: username,
        },
    });
    if (user) {
        return res.status(400).json({
            msg: `El usuario ${username} ya existe`,
        });
    }
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield user_1.User.create({
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
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.User.findOne({
        where: {
            username: username,
        },
    });
    if (!user) {
        return res.status(400).json({ msg: "Usuario incorrecto" });
    }
    const passwordValid = bcrypt_1.default.compare(password, user.password);
    if (!(yield passwordValid.valueOf())) {
        return res.status(400).json({ msg: "contraseña incorrecto" });
    }
    const token = jsonwebtoken_1.default.sign({ user: user }, "secret");
    return res.json({ userToken: token });
});
exports.loginUser = loginUser;
