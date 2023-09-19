"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wod = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Wod = connection_1.default.define("Wod", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "name",
    },
    fecha: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fecha",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Wod = Wod;
