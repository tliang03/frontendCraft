var _getHelloModel = function(req){
	var inputText = req.cookies.inputText || '';
	var model = {
		controllerName: 'helloController',
		inputText: inputText
	};
	return model;
};

var _getGoodbyeModel = function(req){
	var inputText = req.cookies.inputText || '';
	var model = {
		controllerName: 'goodbyeController',
		inputText: inputText
	};
	return model;
};


module.exports = function(app){
	app.get('/one', function(req, res){
		res.render('hello.ejs', _getHelloModel(req), function(err, html){
			return res.send(html);
		});
	});

	app.get('/second', function(req, res){
		res.render('goodbye.ejs', _getGoodbyeModel(req), function(err, html){
			return res.send(html);
		});
	});
}
