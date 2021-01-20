// 连接数据库
const sqlDb = require('../modular');

/**
 * 编译模型生成数据库
 */
sqlDb.sync({ alter: true }).then(function () {
    sqlDb.close();
    console.log("Table created");
}).catch(function (err) {
    console.log("Server failed to start due to error: %s", err);
});
