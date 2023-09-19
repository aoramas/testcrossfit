import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Estudiante = sequelize.define("Estudiante", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idUsuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idUsuario",
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "edad",
  },
  peso: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "peso",
  },
  estatura: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "estatura",
  },
  genero: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "genero",
  },
  idMembresia: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idMembresia",
  },
  lesiones: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "lesiones",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Estudiante };
