const { DataTypes, Model } = require("sequelize");

const AsignacionHorarios_TABLE = "asignacion_horarios";

const AsignacionHorariosSchema = {
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
    // foreignKey: true,
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
};
class AsignacionHorarios extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: AsignacionHorarios_TABLE,
      modelName: "AsignacionHorarios",
      timestamps: true,
    };
  }
}

module.exports = { AsignacionHorarios_TABLE, AsignacionHorariosSchema, AsignacionHorarios};
