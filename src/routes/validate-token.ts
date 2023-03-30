
import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next:NextFunction) => {

    const headerToken = req.headers['authorization']

    if(headerToken != undefined && headerToken.startsWith('Bearer')){

        try {

        const bearerToken = headerToken.slice(8);

        jwt.verify(bearerToken, process.env.SECRET_KEY || 'hola123')
        next();
            
        } catch (error) {

            res.status(401).json({
                msg: 'Token no valido'
            })
            
        }

    }else{
        res.status(401).json({
            msg: 'Acesso denegado'
        })
    }

    
    console.log('validate token')
}

export default validateToken