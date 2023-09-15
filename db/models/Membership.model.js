const { DataTypes, Model  } = require("sequelize");

// const PROMOTION_TABLE = "promotion"
const MEMBERSHIP_TABLE = "membership";

const MembershipSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  // idPromocion: {
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   field: "idPromocion",
  //   references: {
  //     model: PROMOTION_TABLE,
  //     key: "id",
  //   },
  //   onUpdate: "CASCADE",
  //   onDelete: "SET NULL",  
  // },
  promocionName: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "promocionName",
  },
  descuento: {
    allowNull: true,
    type: DataTypes.FLOAT,
    field: "descuento",
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
  fechaVencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaVencimiento",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  }
};

class Membership extends Model {
  static associate(models) {
    // this.belongsTo(models.Promotion, {foreignKey: 'idPromocion'});
  }

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
