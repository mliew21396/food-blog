exports.render = function(req, res) {
    res.render('index', {
    	title: 'FOOD BLOG',
    	user: JSON.stringify(req.user)
    });
};