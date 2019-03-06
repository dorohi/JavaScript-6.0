console.log(getFriendlyNumbers(1, 500));

function getFriendlyNumbers(start, end){
	let friendly = [];
	if (isNaN(start) || isNaN(end)){
		return console.log("ERROR: Введите числовые параметры!");
	}
	if (!isInteger(start) || !isInteger(end)) {
		return console.log("ERROR: Введите числовые параметры!");
	}
	if (start>end) {
		return console.log("ERROR: Диапазон не может быть отрицательным!");
	}
	for (let i = start; i <= end; i++) {
		console.log("Берем число: " + i);
		for (let j = i; j <= end; j++) {
			//console.log("Test i=" + i + "; j=" + j);
			if (getSumDividers(i) == j && getSumDividers(j) == i && i!=j) {
				let pare = [i,j];
				friendly.push(pare);
				console.log(friendly);
			}
		}
	}
	if (friendly.length) {
		return friendly;
	} else {
		return false;
	}
}

function spreadNumber(num){
	let dividers = [];
	for (let i = 0; i < num; i++) {
		if (num % i == 0){
			dividers.push(i);
		}
	}
	return dividers;
}

function sumDividers(arr){
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function getSumDividers(num) {
	return sumDividers(spreadNumber(num));
}

function isInteger(num) {
	return (num ^ 0) === num;
}