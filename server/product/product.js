const express = require('express');
const product_router = express.Router();

const modular = require('../../modular');
const Product = modular.product;

product_router.get('/product_list', function (req, res, next) {
    return modular.sequelize.transaction(function (t) {
        return Product.findAll({
            transaction: t
        }).then(function (result) {
            res.send(result);
            next();
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    });
});

product_router.get('/add_product', function (req, res, next) {
    const obj = {
        product_name: '这是商品' + String(parseInt(Math.random() * 10 + 1)),
        marque: String(parseInt(Math.random() * 10 + 1)),
        barcode: String(parseInt(Math.random() * 1000000000 + 1)),
        price: parseInt(Math.random() * 10000 + 1) / 100,
        market_price: parseInt(Math.random() * 10000 + 1) / 100,
        cost_price: parseInt(Math.random() * 10000 + 1) / 100,
        stock: 999,
        warning_stock: 50,
        integral: 200,
    };
    console.log(obj);
    console.log(typeof obj.product_name);
    return modular.sequelize.transaction(function (t) {
        return Product.create(obj, {
            transaction: t
        }).then(function (result) {
            res.send(result);
            next()
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    })
});

module.exports = product_router;
