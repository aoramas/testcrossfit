const { Model, DataTypes } = require("sequelize");
const { EXERCISES_TABLE } = require("./Exercise.model");

const WODEJERCICIOS_TABLE = "wodEjercicios";

class WodEjercicios extends Model {
  static associate(models) {
    this.hasMany(models.Wod, {
      foreignKey: "idWodEjercicios",
    });
  }
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
    reference: {
      model: EXERCISES_TABLE,
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
};

module.exports = { WodEjercicios, WodEjerciciosSchema, WODEJERCICIOS_TABLE };
