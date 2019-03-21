let each = function (startArr, f) {
	return f(startArr);
};

let arr1 = [64, 49, 36, 25, 16];
let myFunc = function (a) {
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i] = Math.sqrt(a[i]);
	}
	return newArr;
};

module.exports = each(arr1, myFunc);