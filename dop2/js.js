let wrap = document.querySelector('.popup__call-wrap');

wrap.addEventListener('click', function () {
	console.log('Open');
	let arrow = wrap.querySelector('.popup__call-svg'),
		phones = document.querySelectorAll('.popup__call-phone'),
		divPhon = document.querySelector('.popup__call-phoneblock');
	arrow.style.transform = 'rotate(180deg)';
	phones.forEach((element) => {
		element.style.visibility = 'visible';
		if (element.classList.contains('popup__call-phone-hidden')) {
			element.addEventListener('click', () => {
				console.log('Select');
				divPhon.insertBefore(element, this.parentNode);
				this.parentNode.style.visibility = 'hidden';
				this.parentNode.classList.add('popup__call-phone-hidden');
				element.classList.remove('popup__call-phone-hidden');
			});
		}
	});
});