const { Model, DataTypes } = require("sequelize");
const { WODEJERCICIOS_TABLE } = require("./WodEjercicios.models");

const WOD_TABLE = "wod";

const WodSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  idWodEjercicios: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idWodEjercicios",
    reference: {
      model: WODEJERCICIOS_TABLE,
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
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
};

class Wod extends Model {
  static associate(models) {
    this.hasMany(models.WodEjercicios, {
      foreignKey: "idWodEjercicios",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: WOD_TABLE,
      modelName: "Wod",
      timestamps: true,
    };
  }
}

module.exports = { Wod, WodSchema, WOD_TABLE };
