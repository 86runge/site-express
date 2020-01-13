const express = require('express');
const favicon = require('express-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const memcachedStore = require('connect-memcached')(session);

// express 中间建
const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

// 获取前端传过来的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 打印日志
app.use(logger('dev'));

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

// 允许跨域
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

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
