var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);
  // mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meals-development');

	require('../app/models/user.server.model');
	require('../app/models/post.server.model');

	return db;
};