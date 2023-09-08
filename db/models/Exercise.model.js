const { Model, DataTypes } = require("sequelize");

const EXERCISES_TABLE = "exercises";

class Exercises extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXERCISES_TABLE,
      modelName: "Exercises",
      timestamps: true,
    };
  }
}

const ExercisesSchema = {
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
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "state",
  },
};

module.exports = { Exercises, ExercisesSchema, EXERCISES_TABLE };
