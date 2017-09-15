const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const routes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));

routes(app);

app.listen(8080, function(){
	console.log("Server start listening to 8080");
});	

module.exports = app;