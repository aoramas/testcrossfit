const { DataTypes, Model  } = require("sequelize");

const ROL_TABLE = "roles";

const RolSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idPermisos: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idPermisos",
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },
  idTipoPermiso: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idTipoPermiso",
    foreignKey: true,
  },
};

class Rol extends Model {
  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: "Rol",
      timestamps: true,
    };
  }
}

module.exports = { ROL_TABLE, RolSchema, Rol };
