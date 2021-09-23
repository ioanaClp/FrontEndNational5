let storeBtn = document.getElementById('store-btn');
let getBtn = document.getElementById('get-btn');

console.log(storeBtn, getBtn);

storeBtn.addEventListener('click', () => {
	const user = 'Daniel';
	document.cookie = `user = ${user}`;
	const userId = 3335;
	document.cookie = `userId = ${userId}`;
});

getBtn.addEventListener('click', () => {
	let cookies = document.cookie;
	console.log(cookies.split(';')[0].split('=')[1]);
});

var options = document.querySelectorAll('input[name=lang]');
options.forEach((option) =>
	option.addEventListener('change', () => {
		document.cookie = `language=${option.value}`;
	})
);

window.onload = () => {
	let cookies = document.cookie.split(';');

	cookies = cookies.map((cookie) => cookie.trim());
	console.log(cookies);

	cookies.forEach((cookie) => {
		if (cookie.split('=')[0] === 'language') {
			if (cookie.split('=')[1] == 'EN') {
				document.getElementById('en').checked = true;
			} else if (cookie.split('=')[1] == 'RO') {
				document.getElementById('ro').checked = true;
			}
		}
	});
};
