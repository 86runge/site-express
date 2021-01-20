const express = require('express');
const user_router = express.Router();

const modular = require('../../modular');
const UserStaff = modular.user_staff;
const User = modular.user;

const pageResult = require('../common/page-result');
const randomPhone = require('../../utils/random/random-phone');

UserStaff.belongsTo(User, {foreignKey: 'user_id'});

user_router.get('/user/user_staff_list', (req, res, next) => {
    return modular.transaction(function () {
        return pageResult(UserStaff, [User], req.query.page, req.query.pageSize).then(function (result) {
            res.send(result);
            next();
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    });
});

user_router.post('/user/add_user_staff', (req, res, next) => {
    const obj = {
        job_no: randomPhone(),
        user_id: '',
        department_id: '',
        post_id: '',
        post_level_id: '',
        working_years: 1,
        status: 1,
    };
    return modular.transaction(function (t) {
        return UserStaff.create(obj, {
            transaction: t
        }).then(function (result) {
            res.send(result);
            next()
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    })
});

module.exports = user_router;
