window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	let info = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	hideTabContent(1);
	function hideTabContent (key){
		for (let i = key; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	
	function showTabContent(key){
		if (tabContent[key].classList.contains('hide')){
			tabContent[key].classList.remove('hide');
			tabContent[key].classList.add('show');
		}
	}

	info.addEventListener('click', (event) =>{
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i] == target){
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//TIMER
	let deadLine ='2019-03-15';

	function getTimeRemaining(endTime){
		let t = Date.parse(endTime) - Date.parse(new Date());
		if (t<=0) {
			t = 0;
		}
		let seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)));
		return {
			'total' : t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(update, 1000);
		
		function update(){
			let t = getTimeRemaining(endTime);
			hours.textContent = getNormal(t.hours);
			minutes.textContent = getNormal(t.minutes);
			seconds.textContent = getNormal(t.seconds);

			if (t.total<=0){
				clearInterval(timeInterval);
			} 
		}
		
	}
	setClock('timer', deadLine);
});

function getNormal(number) {
	if (number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}