// 连接数据库
var sqldb = require('../sqldb');

sqldb.sequelize.sync().then(function () {
    sqldb.sequelize.close();
    console.log("Table created");
}).catch(function (err) {
    console.log("Server failed to start due to error: %s", err);
});
