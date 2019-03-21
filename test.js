function getHourDeg(hour, minutes) {
	hour > 12 ? hour -= 12 : hour;
	minutes = minutes/2;
	return 30 * hour + minutes;
}

function getMinutesDeg(minutes) {
	return minutes * 6;
}

function getDegBetwenClock(hour, minutes){
	let deg,
		minutDeg = getMinutesDeg(minutes),
		hourDeg = getHourDeg(hour, minutes);
	deg = minutDeg - hourDeg < 0 ? hourDeg - minutDeg : minutDeg - hourDeg;
	return (deg > 180) ? deg -= 180 : deg;
}

console.log(getDegBetwenClock(6, 0));
console.log(getDegBetwenClock(3, 0));
console.log(getDegBetwenClock(3, 30));
console.log(getDegBetwenClock(5, 55));
console.log(getDegBetwenClock(6, 5));