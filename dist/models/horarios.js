"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horarios = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Horarios = connection_1.default.define("Horario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    diaSemana: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    horaInicio: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    horaFin: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
});
exports.Horarios = Horarios;
