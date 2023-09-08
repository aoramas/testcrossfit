const { DataTypes, Model  } = require("sequelize");

const SCHEDULE_TABLE = "horarios";

const HorarioSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  diaSemana: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "diaSemana",
  },
  horaInicio: {
    allowNull: false,
    type: DataTypes.TIME,
    field: "horaInicio",
  },    
  horaFin: {
    allowNull: false,
    type: DataTypes.TIME,
    field: "horaFin",
  },
};

class Horario extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: SCHEDULE_TABLE,
      modelName: "Horario",
      timestamps: true,
    };
  }
}

module.exports = { SCHEDULE_TABLE, HorarioSchema, Horario };