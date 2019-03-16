let phones = document.querySelectorAll('.popup__call-phone');

phones.forEach((element) => {
	element.addEventListener('click', function () {
		let target = event.target;
		if (target.classList.contains('popup__call-country') || 
			target.parentNode.classList.contains('popup__call-svg') || 
			target.parentNode.classList.contains('popup__call-wrap')) {

			phones.forEach((el) => {
				let arrow = el.querySelector('.popup__call-svg');
				el.style.visibility = 'visible';
				arrow.style.transform = 'rotate(180deg)';
			});
		}
		if (target.classList.contains('popup__call-phone-hidden') || 
			target.parentNode.classList.contains('popup__call-phone-hidden') || 
			target.parentNode.parentNode.classList.contains('popup__call-phone-hidden')){

			phones.forEach(() => {
				let oldFirst = phones.firstElementChild,
					arrow = this.querySelector('.popup__call-svg');
					
				phones = document.querySelector('.popup__call-phoneblock');
				phones.insertBefore(this, oldFirst);
				this.classList.remove('popup__call-phone-hidden');
				arrow.style.transform = 'rotate(0deg)';
				if (oldFirst) {
					oldFirst.classList.add('popup__call-phone-hidden');
					oldFirst.style.visibility = 'hidden';
				}
			});
		}
		phones = document.querySelectorAll('.popup__call-phone');
	});
});

const phone = document.querySelectorAll('input');

function mask(event) {
	let country = this.getAttribute('data-mask'),
		matrix,
		curentSimvol = 0,
		value = this.value.replace(/\D/g, "");
	if (country=='bel'){
		matrix = "+375 (__) ___ __ __";
	} else if (country == 'rus') {
		matrix = "+7 (___) ___ __ __";
	}
	let onlyNumbers = matrix.replace(/\D/g, "");

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

phone.forEach( (element) => {
	element.addEventListener("focus", mask);
	element.addEventListener("input", mask);
	element.addEventListener("blur", mask);
});
