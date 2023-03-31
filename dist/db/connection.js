"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const sequalize = new sequelize_1.Sequelize('rrhh', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
/* app.listen(3000, ()=>{
    console.log('server Up en http://localhost:3000')
}) */
sequalize.authenticate().then(() => {
    console.log('conexion a la base de datos ok');
}).catch(error => {
    console.log('Error de conexion' + error);
});
exports.default = sequalize;
