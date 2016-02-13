var port = 1337;

module.exports = {
	port: process.env.PORT || port,
	db: 'MONGOLAB_URI'
};
