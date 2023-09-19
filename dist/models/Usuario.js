"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define("Usuario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    identificacion: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "identificacion",
    },
    nombres: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "nombres",
    },
    apellidos: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "apellidos",
    },
    username: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        field: "username",
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "password",
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "email",
    },
    telefono: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "telefono",
    },
    direccion: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "direccion",
    },
    fechaInicio: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "fechaInicio",
    },
    idRol: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "idRol",
    },
    estado: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "estado",
        defaultValue: true,
    },
});
exports.Usuario = Usuario;
