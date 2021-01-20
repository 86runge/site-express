const express = require('express');
const user_router = express.Router();

const modular = require('../../modular');
const User = modular.user;
const UserProfile = modular.user_profile;

const pageResult = require('../common/page-result');

const randomName = require('../../utils/random/random-name');
const randomPassword = require('../../utils/random/random-password');
const randomPhone = require('../../utils/random/random-phone');

UserProfile.belongsTo(User, { foreignKey: 'user_id'});

user_router.get('/user/user_list', (req, res, next) => {
    return modular.transaction(function () {
        return pageResult(User, [], req.query.page, req.query.pageSize).then(function (result) {
            res.send(result);
            next();
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    });
});

user_router.post('/user/add_user', (req, res, next) => {
    const obj = {
        username: randomPassword(6),
        password: randomPassword(12),
        name_cn: randomName(),
        nick: randomName(),
        phone: randomPhone(),
        email: randomPhone() + '@qq.com',
        sex: 1,
        face_url: '',
        education_id: 1,
        status: 1,
    };
    return modular.transaction(function (t) {
        return User.create(obj, {
            transaction: t
        }).then(function (result) {
            return UserProfile.create(Object.assign(obj, {
                user_id: result.id,
                real_name: result.name_cn,
                nick_name: result.nick,
                user_level: 1,
            }), { transaction: t });
        }).then(result => {
            res.send(result);
            next()
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    })
});

module.exports = user_router;
