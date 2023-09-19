"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Estudiante = connection_1.default.define("Estudiante", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    idUsuario: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idUsuario",
    },
    edad: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "edad",
    },
    peso: {
        allowNull: false,
        type: sequelize_1.DataTypes.FLOAT,
        field: "peso",
    },
    estatura: {
        allowNull: false,
        type: sequelize_1.DataTypes.FLOAT,
        field: "estatura",
    },
    genero: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "genero",
    },
    idMembresia: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idMembresia",
    },
    lesiones: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "lesiones",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Estudiante = Estudiante;
