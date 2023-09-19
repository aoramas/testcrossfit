import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Ejercicio = sequelize.define("Ejercicio", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  repeticiones: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "repeticiones",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Ejercicio };
