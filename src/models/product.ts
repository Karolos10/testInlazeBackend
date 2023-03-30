import { DataTypes } from "sequelize"
import sequalize from "../db/connection"

export const product = sequalize.define('product', {
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