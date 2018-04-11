var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var SessionStore = require('express-mysql-session')(session); 
var cookieParser = require('cookie-parser');
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser("session_cookie_name"));


var options = {
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '123456',
    database: 'test',
}

app.use(session({
    key: 'session_cookie_name',  
    secret: 'session_cookie_secret',   // 用来对session id相关的cookie进行签名
    store: new SessionStore(options), //session存储实例  
  	saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
 	resave: false, // 是否每次都重新保存会话，建议false
  	cookie: {
    	maxAge: 60000 * 1000 // 有效期，单位是毫秒
  	},
}));


/*session*/
app.use((req,res,next)=>{
    console.log("req.session.name  " + req.session.name);
    res.locals.name = req.session.name;
    next()
})

/*app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    delete req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div class="alert alert-error">' + err + '</div>';
    var welcome="";
    next();
});*/


/*router 路由*/
var router = require('./routes/routes');
app.use(router());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


