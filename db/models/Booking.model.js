const { DataTypes, Model } = require("sequelize");
const { STUDENT_TABLE } = require("./Student.model");
const { SCHEDULE_TABLE } = require("./Horario.model");

const BOOKING_TABLE = "booking";

const BookingSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idHorario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idHorario",
    reference: {
      model: SCHEDULE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  idStudent: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idStudent",
    reference: {
      model: STUDENT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "description",
  },
};

class Booking extends Model {
  static associate(models) {
    this.belongsTo(models.Horario, { foreignKey: "idHorario" });
    this.belongsTo(models.Student, { foreignKey: "idStudent" });
  }
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
