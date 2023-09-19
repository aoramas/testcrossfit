import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Reservacion = sequelize.define("Reservacion", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idHorario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idHorario",
  },
  idStudent: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idStudent",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "description",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Reservacion };
