import { product } from '../models/product';

import { Request, Response }from 'express';

export const getProducts = (req: Request, res: Response) =>{

    /* const listProducts = product.findAll() */

    res.json({
        msg: "Get Products"
    })

}