var express = require('express');
var router = express.Router();
var db = require('../sqldb');
var User = db.User;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/add/user', function (req, res, next) {
    console.log("+++++++++++++++++++++++");
    // console.log(req);
    console.log(req.body);
    var saveUser = {
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight
    };

    return db.sequelize.transaction(function (t) {
        console.log("+++++++++++++++++++");
        return User.create(saveUser, {
            transaction: t
        }).then(function (result) {
            res.send(result);
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    })
});

router.get('/get/user/:userid', function (req, res, next) {
    return db.sequelize.transaction(function (t) {
        return User.findOne({
            id: req.params.userid
        }, {
            transaction: t
        }).then(function (result) {
            res.send(result);
        }).catch(function (err) {
            console.log("发生错误：" + err);
        });
    });
});

router.post('/update/user/age', function (req, res, next) {
    return db.sequelize.transaction(function (t) {
        return User.findById(req.body.userid, {
            transaction: t
        }).then(function (user) {
            return user.update({
                age: req.body.age
            }, {
                transaction: t
            }).then(function (result) {
                res.send(result);
            }).catch(function (err) {
                console.log("发生错误：" + err);
            });
        })
    })
});

// 文件上传

router.post('/file_upload', function (req, res, next) {
    // 获得文件的临时路径
    var tmp_path = req.files.thumbnail.path;
    // 指定文件上传后的目录 - 示例为"images"目录。
    var target_path = './public/images/' + req.files.thumbnail.name;
    // 移动文件
    fs.rename(tmp_path, target_path, function (err) {
        if (err) throw err;
        // 删除临时文件夹文件,
        fs.unlink(tmp_path, function () {
            if (err) throw err;
            res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
        });
    });
});


module.exports = router;
