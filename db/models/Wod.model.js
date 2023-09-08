const { Model, DataTypes } = require("sequelize");

const WOD_TABLE = "wod";

class Wod extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: WOD_TABLE,
      modelName: "Wod",
      timestamps: true,
    };
  }
}

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

module.exports = { Wod, WodSchema, WOD_TABLE };
