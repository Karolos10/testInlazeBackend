"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => {
    const listProducts = product_1.Product.findAll();
    res.json({
        msg: "Get Products"
    });
};
exports.getProducts = getProducts;
