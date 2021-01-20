// 系统依赖
const fs = require('fs');
const path = require('path');
// express依赖
const express = require('express');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
// 缓存依赖
const cookieParser = require('cookie-parser');
const session = require('express-session');
const memcachedStore = require('connect-memcached')(session);
// 日志依赖
const logger = require('morgan');
const fileStreamRotator = require('file-stream-rotator');
const logDirectory = path.join(__dirname, 'logs');

// express 中间件
const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

// 获取前端传过来的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 允许跨域
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');

    // console.log('req', req);
    // console.log('res', JSON.stringify(res));

    if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

// cookie
app.use(cookieParser());

// session
app.use(session({
    secret: 'site', // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
    name: 'session_id', // 保存在本地cookie的一个名字 默认connect.sid  可以不设置
    resave: false, // 强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。
    saveUninitialized: true, // 强制将未初始化的 session 存储。  默认值是true  建议设置成true
    cookie: {
        maxAge: 5000 * 60 // 过期时间
    }, // secure https这样的情况才可以访问cookie 设置过期时间比如是30分钟，只要浏览页面，30分钟没有操作的话就过期
    rolling: true, // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
    store: new memcachedStore({
        hosts: ['127.0.0.1:11211'], //this should be where your Memcached server is running
        secret: 'site_key' // Optionally use transparent encryption for memcache session data
    })
}));

// 打印日志
// 确保存储的路径存在
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// 自定义token
logger.token('localDate',function getDate(req) {
    let date = new Date();
    return date.toLocaleString()
});
// 创建输出流
var accessLogStream = fileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, '%DATE%-access.log'),
    frequency: 'daily',
    verbose: false
});
// 创建输出流
var errorLogStream = fileStreamRotator.getStream({
    date_format: 'YYYYMMDD', //日期类型
    filename: path.join(logDirectory, '%DATE%-error.log'), //文件名
    frequency: 'daily', //每天的频率
    verbose: false
});

// 写正常访问请求的log日志
app.use(logger(':localDate :remote-addr :method :url :status :res[content-length] - :response-time ms', {stream: accessLogStream}));
// 写访问出错的log日志
app.use(logger(':localDate :remote-addr :method :url :status :res[content-length] - :response-time ms', {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: errorLogStream
}));

// 加载api
const user = require('./router/user');
const systemSettings = require('./router/system-settings');
const content = require('./router/content');
const document = require('./router/document');
const product = require('./router/product');
const order = require('./router/order');
const finance = require('./router/finance');
const serverList = [].concat(user, systemSettings, content, document, product, order, finance);
serverList.forEach((item) => {
    app.use('/', item);
});

module.exports = app;
