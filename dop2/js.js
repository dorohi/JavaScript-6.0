let phones = document.querySelectorAll('.popup__call-phone'),
	hide = document.querySelector('.popup__call-phone-hidden'),
	divPhon = document.querySelector('.popup__call-phoneblock'),
	first, second;

phones.forEach((element) => {
	let wrap = document.querySelector('.popup__call-wrap');
	wrap.addEventListener('click', function () {
		if (!element.classList.contains('popup__call-phone-hidden')){
			first = element;
		}
		let arrow = wrap.querySelector('.popup__call-svg');
		arrow.style.transform = 'rotate(180deg)';
		element.style.visibility = 'visible';
	});
});

hide.addEventListener('click', () => {
	second = hide;
	console.log(first);
	console.log(second);
	divPhon.insertBefore(second, first);
	second.classList.remove('popup__call-phone-hidden');
	first.classList.add('popup__call-phone-hidden');
	first.style.visibility = 'hidden';
});