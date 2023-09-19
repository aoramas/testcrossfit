import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const WodEjercicios = sequelize.define("WodEjercicios", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idEjercicio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idEjercicio",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
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

export { WodEjercicios };
