"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequalize = new sequelize_1.Sequelize('rrhh', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequalize;
