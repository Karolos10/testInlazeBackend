"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const getProducts = (req, res) => {
    /* const listProducts = product.findAll() */
    res.json({
        msg: "Get Products"
    });
};
exports.getProducts = getProducts;
