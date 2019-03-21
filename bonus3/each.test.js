const each = require('./each');
console.log(each);

test('typeOf', () => {
	expect(typeof each).toBe('object');
	expect(each.length).toBe(5);
});