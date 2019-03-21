const sum = require('./sum');

test('adds 9 + 2 to equal true', () => {
	expect(sum(9, 2)).toBe(true);
});