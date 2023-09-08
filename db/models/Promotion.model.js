const { DataTypes, Model } = require("sequelize");

const PROMOTION_TABLE = "promotions";

const PromotionSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: "nombre",
  },
  descuento: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "descuento",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
  },
};

class Promotion extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROMOTION_TABLE,
      modelName: "Promotion",
      timestamps: true,
    };
  }
}

module.exports = { PROMOTION_TABLE, PromotionSchema, Promotion };
