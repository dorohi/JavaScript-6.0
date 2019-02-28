
window.addEventListener('DOMContentLoaded', function () {
	let num = 33721;
	/* Преобразовать число в строку и обратится к каждому символу */
	let strNum = String(num);
	//let strNum = num+""; или топорно

	/* Доступ до символов как до елементов масива */
	let result = strNum[0] * strNum[1] * strNum[2] * strNum[3] * strNum[4];
	// Или с помощью метода charAt
	//let result = strNum.charAt(0)*strNum.charAt(1)*strNum.charAt(2)*strNum.charAt(3)*strNum.charAt(4);
	console.log(result);

	let power = result * result * result;
	console.log(power);
	let strPower = String(power);
	//document.querySelector('#firstSecond').textContent = strPower.charAt(0)*strPower.charAt(1);
	let strPowerSlise = strPower[0] + strPower[1];
	console.log(typeof strPowerSlise);
	console.log(strPowerSlise);
	document.querySelector('#firstSecond').textContent = strPowerSlise;
});		