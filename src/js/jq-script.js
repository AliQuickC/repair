$(document).ready(function () {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	var up = $('#button-up');

	var animated = $('.wow');
	

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


	function animate() {
		for (var i = 0; i < animated.length; i++) {
			var dataOffset = $(animated[i]).attr('data-wow-offset'); // получаем дата атрибут
			var iOffset = $(window).scrollTop() - $(animated[i]).offset().top + $(window).height(); 
			//  получаем координаты блока от нижнего края окна браузера

			if( $(animated[i]).hasClass("fadeInUp") ) { iOffset += 350; } // "костыль", для анимации снизу вверх

			if ((dataOffset === undefined && iOffset > 0) || (iOffset > dataOffset)) {
				var dataDelay = $(animated[i]).attr('data-wow-delay');
				if (dataDelay !== undefined) {
					$(animated[i]).css("animation-delay", dataDelay);
				}
				$(animated[i]).css("animation-play-state", "running");
			}

		}
	}

	animate();

	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 100) {
			up.fadeIn();
		} else {
			up.fadeOut();
		}

		animate();		
	});

});