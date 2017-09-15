
var _subscribeEvent = function(){
	$('#back').click(function(){
		window.location.href = '/one';
	});
};

var goodbyeController = {
	init: function(){
		_subscribeEvent();
	}
}
