$(document).ready(setupUI);

function setupUI() {
	$('.work-list-item').on('click', function() {
		const item = $(this);
		const url = item[0].dataset.link;
		window.open(url, '_blank');
	});
}
