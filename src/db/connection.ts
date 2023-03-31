
import { Sequelize } from "sequelize";
import express from 'express';

const app = express()


const sequalize = new Sequelize('rrhh', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


/* app.listen(3000, ()=>{
    console.log('server Up en http://localhost:3000')
}) */

sequalize.authenticate().then(() =>{
    console.log('conexion a la base de datos ok')
}).catch(error =>{
    console.log('Error de conexion' + error)
})

export default sequalize;