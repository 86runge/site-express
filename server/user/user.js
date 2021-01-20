const express = require('express');
const user_router = express.Router();

const interfaces = require('../../utils/getIPAddress');

const modular = require('../../modular');
const User = modular.user;
const UserLoginLog = modular.user_login_log;
const UserOperateLog = modular.user_operate_log;

user_router.post('/user/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then((user_find) => {
        if (user_find) {
            const user_id = user_find.toJSON().id;
            // 记录登录记录
            UserLoginLog.create({
                login_id: user_id,
                login_ip: interfaces(),
                login_time: new Date(),
                is_login: 1,
            });
            return res.json({
                code: 0,
                success: true,
                message: '登录成功'
            });
        }
        return res.json({
            code: 1,
            success: false,
            message: '用户名或密码错误'
        });
    });
});

user_router.post('/user/register', (req, res) => {
    const userObj = {
        username: req.body.username,
        password: req.body.password,
        nick: req.body.nick,
        phone: req.body.phone,
        email: req.body.email,
    };
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then((user_find) => {
        if (!user_find) {
            User.create(userObj).then((user_add) => {
                if (user_add) {
                    return res.json({
                        code: 0,
                        success: true,
                        message: '注册成功'
                    });
                }
            })
        } else {
            return res.json({
                code: 1,
                success: false,
                message: '用户名已存在'
            });
        }
    });
});

user_router.put('/user/forgot', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then((user_find) => {
        if (user_find) {
            User.update({password: req.body.password}, {where: {username: req.body.username}}).then(() => {
                // 记录操作日志 0新增 1修改 2删除
                UserOperateLog.create({
                    user_id: user_id.id,
                    operate_type: 1,
                    operate_ip: interfaces,
                    operate_time: Date.now()
                });
                return res.json({
                    code: 0,
                    success: true,
                    message: '密码修改成功'
                });
            });
        }
        return res.json({
            code: 1,
            success: false,
            message: '用户名不存在'
        });
    });
});

module.exports = user_router;
