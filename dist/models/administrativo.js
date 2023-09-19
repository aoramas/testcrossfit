"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrativo = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Administrativo = connection_1.default.define("Administrativo", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    cargo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "cargo",
    },
    idUsuario: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idUsuario",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
    },
});
exports.Administrativo = Administrativo;
