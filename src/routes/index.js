var express = require('express');
var router = express.Router();
var usr = require('./mysql');

// 入口
router.get('/', function (req, res) {
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (res.locals.islogin) {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});

// 注册
router.route('/reg')
    .get(function (req, res) {
        res.render('reg', {title: '注册'});
    })
    .post(function (req, res) {
        client = usr.connect();
        usr.insertFun(client, req.body.username, req.body.password2, function (err) {
            if (err) throw err;
            res.redirect('/');
        });
    });

// 登录
router.route('/login')
    .get(function (req, res) {
        if (req.session.islogin) {
            res.locals.islogin = req.session.islogin;
        }

        if (req.cookies.islogin) {
            req.session.islogin = req.cookies.islogin;
        }
        res.render('login', {title: '用户登录', test: res.locals.islogin});
    })
    .post(function (req, res) {
        client = usr.connect();
        result = null;
        usr.selectFun(client, req.body.username, function (result) {
            if (result[0] === undefined) {
                res.send('没有该用户');
            } else {
                if (result[0].password === req.body.password) {
                    req.session.islogin = req.body.username;
                    res.locals.islogin = req.session.islogin;
                    res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                    res.redirect('/home');
                } else {
                    res.redirect('/login');
                }
            }
        });
    });

// 登出
router.get('/logout', function (req, res) {
    res.clearCookie('islogin');
    req.session.destroy();
    res.redirect('/');
});

// 首页
router.get('/home', function (req, res) {
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    res.render('home', {title: 'Home', user: res.locals.islogin});
});

module.exports = router;
