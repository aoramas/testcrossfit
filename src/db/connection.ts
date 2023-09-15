import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:nintendo2020@localhost:5432/testcrossfit"
);

export default sequelize;
