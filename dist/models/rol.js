"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Rol = connection_1.default.define("Rol", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "nombre",
    },
    idTipoPermiso: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idTipoPermiso",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Rol = Rol;
