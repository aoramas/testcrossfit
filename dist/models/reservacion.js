"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservacion = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Reservacion = connection_1.default.define("Reservacion", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    idHorario: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idHorario",
    },
    idStudent: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idStudent",
    },
    fecha: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fecha",
    },
    descripcion: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "description",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Reservacion = Reservacion;
