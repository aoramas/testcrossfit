const { Model, DataTypes } = require("sequelize");

const EXAMPLE_TABLE = "persons";

class Example extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXAMPLE_TABLE,
      modelName: "Example",
      timestamps: true,
    };
  }
}

const ExampleSchema = {
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
};

module.exports = { Example, ExampleSchema };
