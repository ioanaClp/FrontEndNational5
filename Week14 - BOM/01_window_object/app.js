console.log('Salut');
console.log(this);

const h1 = window.document.getElementById('h1id');
console.log(h1);

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);

// window.outerHeight = 500;
// console.log(window.outerHeight);

window.resizeTo(300, 300);

function quarter() {
	window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}

quarter();
