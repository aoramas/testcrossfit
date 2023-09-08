const { Model, DataTypes } = require("sequelize");
const { USER_TABLE } = require("./User.model");

const ADMIN_TABLE = "administrative";

class Administrative extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "idUsuario",
      as: "user",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ADMIN_TABLE,
      modelName: "Administrative",
      timestamps: true,
    };
  }
}

const AdministrativeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cargo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },
  idUsuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idUsuario",
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

module.exports = { ADMIN_TABLE, AdministrativeSchema, Administrative };
