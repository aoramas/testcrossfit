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
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
};

class Wod extends Model {
  static associate(models) {
    this.belongsTo(models.WodEjercicios, {
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
