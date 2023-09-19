"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionHorarios = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const AsignacionHorarios = connection_1.default.define("AsignacionHorarios", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    idAdministrativo: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idAdministrativo",
    },
    fecha: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fecha",
    },
    idHorario: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idHorario",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.AsignacionHorarios = AsignacionHorarios;
