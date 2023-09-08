const { DataTypes, Model  } = require("sequelize");

const PERMISSIONTYPE_TABLE = "permissiontypes";

const PermissionSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombrePermiso: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombrePermiso",
  },
  nemonico: {
    allowNull: false,
    type: DataTypes.STRING(3),
    field: "nemonico",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
  }
};

class PermissionType extends Model {
  
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERMISSIONTYPE_TABLE,
      modelName: "PermissionType",
      timestamps: true,
    };
  }
}

module.exports = { PERMISSIONTYPE_TABLE, PermissionSchema, PermissionType };
