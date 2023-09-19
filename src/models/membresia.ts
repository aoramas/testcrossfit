import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Membresia = sequelize.define("Membresia", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  promocionName: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "promocionName",
  },
  descuento: {
    allowNull: true,
    type: DataTypes.FLOAT,
    field: "descuento",
  },
  precio: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "precio",
  },
  activa: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "activa",
  },
  fechaVencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaVencimiento",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { Membresia };
