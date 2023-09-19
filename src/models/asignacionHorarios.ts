import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const AsignacionHorarios = sequelize.define("AsignacionHorarios", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idAdministrativo: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idAdministrativo",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
  idHorario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idHorario",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
});

export { AsignacionHorarios };
