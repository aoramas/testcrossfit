const { DataTypes, Model  } = require("sequelize");

const PERMISSIONTYPE_TABLE = "permissiontypes";
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
}; 

class Rol extends Model {
  static associate(models) {
    this.belongsTo(models.Permission, {foreignKey: 'idTipoPermiso'});
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
