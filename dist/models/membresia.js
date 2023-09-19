"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membresia = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Membresia = connection_1.default.define("Membresia", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    promocionName: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING,
        field: "promocionName",
    },
    descuento: {
        allowNull: true,
        type: sequelize_1.DataTypes.FLOAT,
        field: "descuento",
    },
    precio: {
        allowNull: false,
        type: sequelize_1.DataTypes.FLOAT,
        field: "precio",
    },
    activa: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "activa",
    },
    fechaVencimiento: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fechaVencimiento",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Membresia = Membresia;
