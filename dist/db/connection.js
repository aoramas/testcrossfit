"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("postgres://postgres:nintendo2020@localhost:5432/testcrossfit");
exports.default = sequelize;
