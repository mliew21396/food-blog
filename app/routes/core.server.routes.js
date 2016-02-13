module.exports = function(app) {
    var core = require('../controllers/core.server.controller');

    app.route('/contact-form').post(core.sendMail);
};