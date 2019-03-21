let assert = require('chai').assert;
// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2, 2);

describe("Функция sum", () => {
	it("Boolean = true", () => {
		assert.equal(sum(9, 2), true);
	});
});


// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	],
	num = arr[1][1];

describe("Проверка числа в массиве", () => {
	it("Переменная равна 5", () => {
		assert.equal(num, 5);
	});
});


// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

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

describe("Проверка результатов функции", () => {
	it("Проверка типа", () => {
		assert.typeOf(each(arr1, myFunc), 'array');
	});
	it("Проверка длинны масива", () => {
		assert.lengthOf(each(arr1, myFunc), 5);
	});
});