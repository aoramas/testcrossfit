import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Promocion = sequelize.define("Promocion", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: "nombre",
  },
  descuento: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "descuento",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Promocion };
