$(document).ready(function() {
	var message = $('#message');
	message.focus();

	setInterval(function() {
		if(message.val()) {
			message.val('');
			$('.success').fadeIn(300).fadeOut(300);
		}
	}, 1000);

	var title = 'nopechat';
	var count = 0;
	setInterval(function() {
		$('.title').text(title.substring(0,count++-3));
		if(count > 13) count = 0;
	}, 200);
});
