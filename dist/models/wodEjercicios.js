"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WodEjercicios = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const WodEjercicios = connection_1.default.define("WodEjercicios", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    idEjercicio: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idEjercicio",
    },
    fecha: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fecha",
    },
    repeticiones: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "repeticiones",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.WodEjercicios = WodEjercicios;
