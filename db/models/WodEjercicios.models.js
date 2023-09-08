const { Model, DataTypes } = require("sequelize");

const WODEJERCICIOS_TABLE = "wodEjercicios";

class WodEjercicios extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: WODEJERCICIOS_TABLE,
      modelName: "WodEjercicios",
      timestamps: true,
    };
  }
}

const WodEjerciciosSchema = {
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
  sets: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "sets",
  },
};

module.exports = { WodEjercicios, WodEjerciciosSchema };
