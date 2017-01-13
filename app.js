var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize=require("sequelize")


var ejs=require('ejs')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

app.use(require('./controlers/appcontroller.js'));

// var sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'sqlite',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//
//     // SQLite only
//     storage: './db/test123.db'
// });
// sequelize
//     .authenticate()
//     .then(function(err) {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(function (err) {
//         console.log('Unable to connect to the database:', err);
//     });

// var users=require('./models/users')




// console.log(require('./models/users.js')(sequelize,Sequelize))
// app.use(require('./controlers/userscontroller'));
// console.log(users)
// require('./models/appmodels')();
//
// var User=require('./models/users.js')(sequelize,Sequelize);
// User.sync({force: false}).then(function () {
//     // 已创建数据表
//     //  User.create({
//     //     firstName: 'squid',
//     //     // lastName: 'Hancock'
//     // });
//
//     User.findAll().then(function (data) {
//         // console.log(data)
//     });
//
// });








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
