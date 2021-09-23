window.onload = () => {
	let searchParamString = window.location.search;

	const searchParam = new URLSearchParams(searchParamString);

	console.log(searchParam.get('id'));
	const id = searchParam.get('id');
	document.write('Detaliile produsului cu id-ul ' + id);
};
