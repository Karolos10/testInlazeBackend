import { DataTypes } from "sequelize"
import sequalize from "../db/connection"

export const Product = sequalize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    descripcion: {
        type: DataTypes.STRING
    }
    
})

/* Product.findAll({attributes:['name', 'descripcion']})
      .then(product =>{
        const resultados = JSON.stringify(product)
        console.log(resultados);
      }).catch(error =>{
        console.log(error)
      }) */

