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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const horarios_1 = __importDefault(require("../routes/horarios"));
const user_1 = __importDefault(require("../routes/user"));
const horarios_2 = require("./horarios");
const Usuario_1 = require("./Usuario");
const administrativo_1 = require("./administrativo");
const asignacionHorarios_1 = require("./asignacionHorarios");
const ejercicio_1 = require("./ejercicio");
const estudiante_1 = require("./estudiante");
const membresia_1 = require("./membresia");
const promocion_1 = require("./promocion");
const reservacion_1 = require("./reservacion");
const rol_1 = require("./rol");
const tipoPermiso_1 = require("./tipoPermiso");
const wod_1 = require("./wod");
const wodEjercicios_1 = require("./wodEjercicios");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    routes() {
        this.app.use("/api/v2/horarios", horarios_1.default);
        this.app.use("/api/v2/user", user_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield horarios_2.Horarios.sync({ alter: true });
                yield Usuario_1.Usuario.sync({ alter: true });
                yield administrativo_1.Administrativo.sync({ alter: true });
                yield asignacionHorarios_1.AsignacionHorarios.sync({ alter: true });
                yield ejercicio_1.Ejercicio.sync({ alter: true });
                yield estudiante_1.Estudiante.sync({ alter: true });
                yield membresia_1.Membresia.sync({ alter: true });
                yield promocion_1.Promocion.sync({ alter: true });
                yield reservacion_1.Reservacion.sync({ alter: true });
                yield rol_1.Rol.sync({ alter: true });
                yield tipoPermiso_1.TipoPermiso.sync({ alter: true });
                yield wod_1.Wod.sync({ alter: true });
                yield wodEjercicios_1.WodEjercicios.sync({ alter: true });
            }
            catch (error) { }
        });
    }
}
exports.Server = Server;
