

import { Sequelize } from "sequelize";


const sequalize = new Sequelize('rrhh', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequalize;