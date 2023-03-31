
import express, { Application } from 'express';
import routesProducts from '../routes/product';
import routesUser from '../routes/user';
import { Product } from './product';
import { user } from './user';
import cors from 'cors'

class Server {

    private app: Application;
    private port: string | undefined;

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.modlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('aplicacion corriendo con el puerto' + this.port);
        })
    }

    routes(){
        this.app.use('/api/products', routesProducts);
        this.app.use('/api/users', routesUser);
    }

    modlewares(){
        this.app.use(express.json());
        this.app.use(cors());

    }

    async dbConecction(){
        try {

            await Product.sync();
            await user.sync();
            
        } catch (error) {

            console.error('fallo en la base de datos', error);
            
        }
    }
}

export default Server;