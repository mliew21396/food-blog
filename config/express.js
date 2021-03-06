var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
	session = require('express-session'),
	favicon = require('serve-favicon'),
	path = require('path'),
	dotenv = require('dotenv');
	dotenv.load();

module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: 'OurSuperSecretCookieSecret'
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(favicon(path.join(__dirname, '..','public','favicon.ico')));
	// app.use(favicon(path.join(__dirname, '..','public','img','favicon.ico')));


	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/posts.server.routes.js')(app);
	require('../app/routes/core.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;
};