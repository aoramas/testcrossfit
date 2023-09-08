const { DataTypes, Model } = require("sequelize");

const STUDENT_TABLE = "student";

const StudentSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  idUsuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idUsuario",
    // foreignKey: true,
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "edad",
  },
  peso: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "peso",
  },
  estatura: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "estatura",
  },
  genero: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "genero",
  },
  idMembresia: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "telefono",
    // foreignKey: true,
  },
  lesiones: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "lesiones",
  },
};

class Student extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: "Student",
      timestamps: true,
    };
  }
}

module.exports = { STUDENT_TABLE, StudentSchema, Student };
