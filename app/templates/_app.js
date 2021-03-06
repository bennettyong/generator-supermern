var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Import the mongoose module
var mongoose = require('mongoose');
var apiRouter = require('./routes/api');

var app = express();

var User = require('./models/user')
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/new_mern_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	
db.once('open', function() {
	console.log("connected!")
	
	/* var test = new Photographer({
		first_name : 'test',
		family_name:'test',
		username:'test',
		password:'test',
		email:'test',
		date_of_birth : new Date

	});
	test.save(function(err, test){
		if(err) return console.error
	}) */
		/* 
		var fluffy = new Kitten({ name: 'Testing' });
	fluffy.save(function (err, fluffy) {
		if (err) return console.error(err);
			fluffy.speak();
		}); 
		*/
	/* var shakespeare = new Book({
		name : "Macbeth",
		author: "Shakespeare",
		date: new Date
	})

	shakespeare.name = "Romeo and Juliet"

	// shakespeare.save(function(err){
	// 	if(err) return handleError(err);
	// })

		Book.find({'name':'Romeo and Juliet'},function (err, books) {
			if (err) return console.error(err);
			console.log(books);
	}) */
});
//morgan middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) 
{
  console.log(req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();

});
app.use(express.static(path.join(__dirname, 'client/build')));
//express static middleware
/* app.use(express.static(path.join(__dirname, 'public'))); */
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404,'Second'));
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
