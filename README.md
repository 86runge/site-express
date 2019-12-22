## 前言

这是node的项目，基本上是用node来实现功能的

## 技术栈

```
node + express + sequelize + mysql
```

## 说明

- config 数据库配置
- modal 模型
- modular 导入模型到生成数据库
- app.js 入口


现在我们开始步入正题 让我们深入了解一下express框架：

如果你刚步入node.js的学习，初步接触的就是express框架。那么什么是express框架呢？它到底有什么作用呢？

### 1：什么是express？它有什么特性及作用呢？

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

    可以设置中间件来响应 HTTP 请求。
    定义了路由表用于执行不同的 HTTP 请求动作。
    可以通过向模板传递参数来动态渲染 HTML 页面。
    现在我们已经知道express的概念及特性，下面我们开始使用它，第一步就是安装express依赖。

### 2：安装express并将其保存到依赖列表中：

    $ cnpm install express --save
    
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

    body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
    cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
    multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

    $ cnpm install body-parser --save
    $ cnpm install cookie-parser --save
    $ cnpm install multer --save
    
### 3：第一个express实例：

```javascript
const express = require('express'); // 引入express模块
const app = express();

app.get('/', function (req, res) { // 下面会讲app.get()和app.use()的区别和用法
    res.send('Hello World');
});

const server = app.listen(8081, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
```

执行以上这个代码：

    $ node express_demo.js 

应用实例，访问地址为 http://0.0.0.0:8081，在浏览器中访问 http://127.0.0.1:8081，结果如下图所示：

### 4：请求和响应

Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。

#### Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

- req.app：当callback为外部文件时，用req.app访问express的实例
- req.baseUrl：获取路由当前安装的URL路径
- req.body / req.cookies：获得「请求主体」/ Cookies
- req.fresh / req.stale：判断请求是否还「新鲜」
- req.hostname / req.ip：获取主机名和IP地址
- req.originalUrl：获取原始请求URL
- req.params：获取路由的parameters
- req.path：获取请求路径
- req.protocol：获取协议类型
- req.query：获取URL的查询参数串
- req.route：获取当前匹配的路由
- req.subdomains：获取子域名
- req.accepts()：检查可接受的请求的文档类型
- req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
- req.get()：获取指定的HTTP请求头
- req.is()：判断请求头Content-Type的MIME类型

#### Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

- res.app：同req.app一样
- res.append()：追加指定HTTP头
- res.set()在res.append()后将重置之前设置的头
- res.cookie(name，value [，option])：设置Cookie
- opition: domain / expires / httpOnly / maxAge / path / secure / signed
- res.clearCookie()：清除Cookie
- res.download()：传送指定路径的文件
- res.get()：返回指定的HTTP头
- res.json()：传送JSON响应
- res.jsonp()：传送JSONP响应
- res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
- res.redirect()：设置响应的Location HTTP头，并且设置状态码302
- res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
- res.send()：传送HTTP响应
- res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
- res.set()：设置HTTP头，传入object可以一次设置多个头
- res.status()：设置HTTP状态码
- res.type()：设置Content-Type的MIME类型
 
 ### 5：app.use及app.get

#### app.use

app.use(path,callback)中的callback既可以是router对象又可以是函数

app.use的作用是将一个中间件绑定到应用中，参数path是一个路径前缀，用于限定中间件的作用范围，所有以该前缀开始的请求路径均是中间件的作用范围，不考虑http的请求方法，例如：
如果path 设置为’/’,则

- GET /
- PUT /foo
- POST /foo/bar

均是中间件的作用范围。

#### app.get

app.get(path,callback)中的callback只能是函数

app.get是express中应用路由的一部分，用于匹配并处理一个特定的请求，且请求方法必须是GET。

#### 什么时用

那么，什么时用app.use，什么时用app.get呢？

路由规则是app.use(path,router)定义的，router代表一个由express.Router()创建的对象，在路由对象中可定义多个路由规则。可是如果我们的路由只有一条规则时，可直接接一个回调作为简写，也可直接使用app.get或app.post方法。即

当一个路径有多个匹配规则时，使用app.use，否则使用相应的app.method(get、post)


