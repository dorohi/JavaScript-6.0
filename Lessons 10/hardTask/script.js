const phone = document.querySelector('#phone');

function mask(event) {
	let matrix = "+38 (0__) ___-__-__",
		curentSimvol = 0,
		onlyNumbers = matrix.replace(/\D/g, ""),
		value = this.value.replace(/\D/g, "");
	if (onlyNumbers.length >= value.length) {
		value = onlyNumbers;
	}
	this.value = matrix.replace(/./g, a => {
		if (/[_\d]/.test(a) && curentSimvol < value.length) {
			return value.charAt(curentSimvol++);
		} else if (curentSimvol >= value.length) {
			return '';
		} else {
			return a;
		}
	});
	if (event.type == "blur") {
		if (this.value.length == 6) {
			this.value = "";
		}
	} 
}

phone.addEventListener("focus", mask);
phone.addEventListener("input", mask);
phone.addEventListener("blur", mask);