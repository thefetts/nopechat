$(document).ready(function() {
	$('input[type="text"]').focus();
	setInterval(function() {
		if($('input[type="text"]').val()) {
			$('input[type="text"]').val('');
			$('.success').fadeIn(300).fadeOut(300);
		}
	}, 1000)

	$('.title').text('');
	var string = 'nopechat';
	var count = 0;
	var interval = setInterval(function() {
		count++;
		$('.title').text(string.substring(0,count-3));
		if(count > 13) {
			count = 0;
		}
	}, 200);
});
