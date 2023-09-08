const { Model, DataTypes } = require("sequelize");

const ADMIN_TABLE = "administrative";

class Administrative extends Model {
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
  },
};

module.exports = { ADMIN_TABLE, AdministrativeSchema, Administrative };
