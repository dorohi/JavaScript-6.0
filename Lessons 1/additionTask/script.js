
window.addEventListener('DOMContentLoaded', function () {
	let num = 33721;
	/* Преобразовать число в строку и обратится к каждому символу */
	let strNum = String(num);
	//let strNum = num+""; или топорно

	let result = 1;
	for (let i = 0; i < strNum.length; i++) {
		console.log("strNum[" + i + "] = " + strNum[i]);
		result *= strNum[i];
		console.log("result " + (i+1) + " step = " + result);
	}
	// Или с помощью метода charAt
	//let result = strNum.charAt(0)*strNum.charAt(1)*strNum.charAt(2)*strNum.charAt(3)*strNum.charAt(4);
	console.log("Total result  = " + result);

	let power = 1;
	for (let j = 1; j <= 3; j++) {
		power *= result;
		console.log("power " + j + " step = " + power);
	}

	let strPower = String(power);
	document.querySelector('#firstSecond').textContent = strPower.slice(0,2);
});		