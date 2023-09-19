import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const TipoPermiso = sequelize.define("TipoPermiso", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombrePermiso: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombrePermiso",
  },
  nemonico: {
    allowNull: false,
    type: DataTypes.STRING(3),
    field: "nemonico",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { TipoPermiso };
