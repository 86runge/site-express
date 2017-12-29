var mysql = require('mysql');

function connectServer() {

    var client = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test'
    });

    return client;
}

// 查找数据
function selectFun(client, username, callback) {
    client.query('select password from user where username="' + username + '"', function (err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

// 插入数据
function insertFun(client, username, password, callback) {
    client.query('insert into user(username, password) value(?,?)', [username, password], function (err, result) {
        if (err) {
            console.log("error:" + err.message);
            return err;
        }
        callback(err);
    });
}

exports.connect = connectServer;
exports.selectFun = selectFun;
exports.insertFun = insertFun;
