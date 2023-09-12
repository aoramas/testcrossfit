const { DataTypes, Model } = require("sequelize");

const STUDENT_TABLE = "student";
const { MEMBERSHIP_TABLE } = require("./Membership.model");
const { USER_TABLE } = require("./User.model");


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
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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
    type: DataTypes.INTEGER,
    field: "idMembresia",
    references: {
      model: MEMBERSHIP_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  lesiones: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "lesiones",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
};

class Student extends Model {
  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'idUsuario'});
    this.belongsTo(models.Membresia, {foreignKey: 'idMembresia'});
  }
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
