const { DataTypes, Model } = require("sequelize");

const BOOKING_TABLE = "booking";

const BookingSchema = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idBooking: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "idBooking",
      // foreignKey: true,
    },
    idStudent: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "idStudent",
    },
    fecha: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "fecha",
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING,
      field: "estatura",
    },
  };
  
  class booking extends Model {
    static associate(models) {}
    static config(sequelize) {
      return {
        sequelize,
        tableName: BOOKING_TABLE,
        modelName: "Booking",
        timestamps: true,
      };
    }
  }
  
  module.exports = { BOOKING_TABLE, BookingSchema, Booking };
  