const { Model, DataTypes } = require("sequelize");

const EXERCISES_TABLE = "exercises";

class Exercises extends Model {
  static associate(models) {
    this.belongsTo(models.WodEjercicios, {
      foreignKey: "idWodEjercicios",
    });
  }
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
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
};

module.exports = { Exercises, ExercisesSchema, EXERCISES_TABLE };
