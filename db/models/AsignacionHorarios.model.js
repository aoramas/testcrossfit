const { DataTypes, Model } = require("sequelize");

const { ADMIN_TABLE} = require("./Administrative.model")
const { SCHEDULE_TABLE} = require("./Horario.model")

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
    references: {
      model: ADMIN_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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
    references: {
      model: SCHEDULE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};
class AsignacionHorarios extends Model {
  static associate(models) {
    this.belongsTo(models.Administrativo, {foreignKey: 'idAdministrativo'});
    this.belongsTo(models.Horario, {foreignKey: 'idHorario'});
  }
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
