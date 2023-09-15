import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Horarios = sequelize.define("Horario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export { Horarios };
