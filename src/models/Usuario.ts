import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  identificacion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "identificacion",
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombres",
  },
  apellidos: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "apellidos",
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: "username",
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "telefono",
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "direccion",
  },
  fechaInicio: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaInicio",
  },
  idRol: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idRol",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Usuario };
