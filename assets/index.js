window.onload = function() {
	let list = document.getElementById('work-list');
	list.addEventListener('click', onProjectClicked);
};

function onProjectClicked(e) {
	const url = e.target.dataset.link
		? e.target.dataset.link
		: e.target.parentNode.dataset.link;
	window.open(url, '_blank');
}
