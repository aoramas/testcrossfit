"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPermiso = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const TipoPermiso = connection_1.default.define("TipoPermiso", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombrePermiso: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "nombrePermiso",
    },
    nemonico: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(3),
        field: "nemonico",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.TipoPermiso = TipoPermiso;
