"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ejercicio = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Ejercicio = connection_1.default.define("Ejercicio", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nombre: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "name",
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
exports.Ejercicio = Ejercicio;
