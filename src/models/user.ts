import { DataTypes } from 'sequelize';
import sequalize from '../db/connection';


export const user = sequalize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    nickname: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },

    password: {
        type: DataTypes.STRING,
    }
})