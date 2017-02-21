var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');


//路由配置
var routes = require('./routes/route');

var app = express();
var domainMiddleware = require('express-domain-middleware');
//页面模板配置
app.enable('trust proxy');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//catch all async error
app.use(domainMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}));

app.use('/static', express.static(path.join(__dirname, 'static')));
// app.use('/template', express.static(path.join(__dirname, 'template')));
//路由
app.use('/', routes);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {  
    res.status(err.status || 500);
    console.warn("[server error][message="+err.message+"][status="+err.status+"][stack="+err.stack+"]");
    res.render('error', {
        message: err.message,
        error: {
            status:err.status,
            stack:err.stack
        }
    });
});
//捕获未知错误
process.on('uncaughtException', function (err) {
    console.log("[uncaughtException][error="+err+"]");
});

exports.app = app;
