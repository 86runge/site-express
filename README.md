## 前言

这是node的项目，基本上是用node来实现功能的

## 技术栈

```
express + webpack + mysql

```

## 说明

此代码中用express模块生成了app对象，app就是此次架设的web实例.

设定端口

app.set('port', process.env.PORT || 3000);

设定视图路径

app.set('views', path.join(__dirname, 'views'));

设定视图引擎模板，还可以设定其他模板，后续介绍

app.set('view engine', 'jade');

设定路由，该路由的处理交给index.js处理

app.use(app.router);

设定静态文件路径

app.use(express.static(path.join(__dirname, 'public')));

若get请求的url为当前路径，则交给路由index入口中的对应函数处理

app.get('/', routes.index);
# express_env
"# express_env" 
