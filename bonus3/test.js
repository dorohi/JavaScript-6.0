function sayName (name){
	let message = `My name is ${name}`;
	return message;
}

let arr = [5,-3,6,-5,0,-7,8,9];
let result = arr.reduce( (sum, elem) => {
	return sum + elem;
});

let assert = require('chai').assert;

describe("sayName", () => {
	it("Получаем фразу с новым именем", () => {
		assert.typeOf(sayName("Misha"), 'string');
	});
});

describe("arr", () => {
	it("Получаем сумму чисел масива", () => {
		assert.equal(result, 13);
	});
});