module.exports = function(app) {
    // Root routing
    var core = require('../controllers/core.server.controller');

    app.route('/contact-form').post(core.sendMail);
};