
window.addEventListener('DOMContentLoaded', function () {
	let	timePrint = document.querySelector('#time');
	setInterval(()=> {
		let time = new Date();
		timePrint.textContent = getNormal(time.getHours()) + ":" + getNormal(time.getMinutes()) + ":" + getNormal(time.getSeconds());
	}, 1000);
});		

function getNormal(number) {
	if (number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}