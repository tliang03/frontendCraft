var _subscribeEvent = function(){
	$('#submit').click(function(){
		var input = $('#input').val();
		setCookie('inputText', input);
		window.location.href = '/second';
	});
};

var setCookie = function(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

var helloController = {
	init: function(){
		_subscribeEvent();
	}
}
