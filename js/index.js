$(document).ready(function() {
	$('.lab-item').on('click', function() {
		var link = $(this).attr('data-link');
		window.open(link, '_blank');
	});

	$('#viewMoreBtn').on('click', function() {
		window.open('https://codepen.io/mclint_', '_blank');
	});

	$('#send-btn').on('click', function() {
		$('#contact-msg').attr('value', '');
	});
});

$(function() {
	$(document).scroll(function() {
		var $nav = $('.navbar-fixed-top');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
