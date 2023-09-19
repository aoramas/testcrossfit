import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Administrativo = sequelize.define("Administrativo", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cargo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "cargo",
  },
  idUsuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idUsuario",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
  },
});

export { Administrativo };
