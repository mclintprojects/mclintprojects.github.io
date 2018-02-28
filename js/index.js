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