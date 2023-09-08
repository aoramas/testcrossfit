const { DataTypes, Model  } = require("sequelize");

const MEMBERSHIP_TABLE = "membership";

const MembershipSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idPromocion: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idPromocion",
  },
  precio: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "precio",
  },
  activa: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "activa",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
  },
  fechaVencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaVencimiento",
  }
};

class Membership extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEMBERSHIP_TABLE,
      modelName: "Membership",
      timestamps: true,
    };
  }
}

module.exports = { MEMBERSHIP_TABLE, MembershipSchema, Membership };
