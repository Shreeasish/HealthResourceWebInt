var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var index = require('./routes/index');
var users = require('./routes/users');
var data = require('./routes/data');
var test = require('./routes/test');
var register = require('./routes/register');
var app = express();

var databaseUrl = 'HealthResourceDB';
var collections = ['Resources'];
//Hospital Name, Hospital Category, Address, Pincode, Phone Number,
//Emergency Number, Ambulance Phone Number, Toll Free Number
//Helpline, Email, Website, SPECIALITIES, FACILITIES, AVAILABLE BEDS.
var db = mongojs(databaseUrl,collections);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/data',data);
app.use('/register',register);
app.use('/test',test);

app.post('/register',function (req,res) {
    body_name = req.body.name;
    body_location = req.body.location;
    console.log(req.body);

    record = {name: body_name, location: body_location};
    // db.Resources.save(record, function (err, records) {
    //     console.log("something jiggles");
    // });
  res.redirect('/');
});


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