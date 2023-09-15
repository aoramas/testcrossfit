import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Horarios = sequelize.define("Horario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  diaSemana: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horaFin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export { Horarios };
