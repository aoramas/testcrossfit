const { DataTypes, Model } = require("sequelize");
const { ROL_TABLE } = require("./Rol.model");
const USER_TABLE = "user";

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  identificacion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "identificacion",
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombres",
  },
  apellidos: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "apellidos",
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "username",
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "telefono",
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "direccion",
  },
  fechaInicio: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaInicio",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
    defaultValue: true,
  },
  idRol: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "idRol",
    references: {
      model: ROL_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class User extends Model {
  static associate(models) {
    this.hasMany(models.Rol, { foreignKey: "id", targetKey: "idRol" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };

//20230908172352-create-administrative
