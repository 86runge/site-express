const express = require('express');
const order_router = express.Router();

const modular = require('../../modular');
const Order = modular.order;

order_router.get('/order_list', (req, res, next) => {
    return modular.sequelize.transaction(function (t) {
        return Order.findAll({
            transaction: t
        }).then(function (result) {
            res.send(result);
            next();
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    });
});

order_router.get('/add_order', (req, res, next) => {
    const obj = {
        order_no: String(parseInt(Math.random() * 1000000000 + 1)),
        price: parseInt(Math.random() * 10000 + 1) / 100,
        product_amount_total: parseInt(Math.random() * 10000 + 1) / 100,
        order_amount_total: parseInt(Math.random() * 10000 + 1) / 100,
        logistics_fee: parseInt(Math.random() * 100 + 1) / 100,
        product_count: 9,
    };
    console.log(obj);
    console.log(typeof obj.order_name);
    return modular.sequelize.transaction(function (t) {
        return Order.create(obj, {
            transaction: t
        }).then(function (result) {
            res.send(result);
            next()
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    })
});

module.exports = order_router;


