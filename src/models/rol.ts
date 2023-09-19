import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Rol = sequelize.define("Rol", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },
  idTipoPermiso: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idTipoPermiso",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Rol };
