
var _subscribeEvent = function(){
	$('#back').click(function(){
		window.location.href = '/hello';
	});
};

var goodbyeController = {
	init: function(){
		_subscribeEvent();
	}
}
