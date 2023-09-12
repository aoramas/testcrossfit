const { DataTypes, Model } = require("sequelize");

const { PERMISSIONTYPE_TABLE } = require("./PermissionType.model");
const ROL_TABLE = "roles";

const RolSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
    references: {
      model: PERMISSIONTYPE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
};

class Rol extends Model {
  static associate(models) {
    this.hasMany(models.PermissionType, {
      foreignKey: "id",
      targetKey: "idTipoPermiso",
    });
    this.belongsTo(models.User, { foreignKey: "id", targetKey: "idRol" });
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
