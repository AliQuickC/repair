$(document).ready(function () {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	var up = $('#button-up');


	button.on('click', function () {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});


	up.on('click', function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 100) {
			up.fadeIn();
		} else {
			up.fadeOut();
		}
	});



});