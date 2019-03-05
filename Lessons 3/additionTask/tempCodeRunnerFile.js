let str = "урок-3-был слишком легким";
console.log("Начальная строка: " + str);

//1 Сделать так, чтобы строка начиналась с большой буквы
let upperCaseStr = str[0].toUpperCase() + str.slice(1);
console.log("Результат большой буквы: " + upperCaseStr);

//2 Теперь замените все “-” на пробелы
// let index = -1;
// while ((index = upperCaseStr.indexOf("-", index + 1)) != -1) {
// 	upperCaseStr = upperCaseStr.slice(0,index) + " " + upperCaseStr.slice(index+1);
// 	console.log("Индекс по которому найден \"-\" : " + index );
// 	console.log("Результат: " + upperCaseStr);
// }
let index = upperCaseStr.indexOf('-');
while (index>=0){
	console.log("index: " + index);
	upperCaseStr = upperCaseStr.replace('-', ' ');
	index = upperCaseStr.indexOf('-');
}
console.log("Результат: " + upperCaseStr);


//3 Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let target = "легким";
let replace = "легкоо";
let findWord = upperCaseStr.indexOf(target);
if (findWord>=0){
	console.log("Индекс найденого слова: " + findWord);

	let word = upperCaseStr.slice(findWord, findWord + target.length);
	console.log("Вырезаное слово: " + word);

	upperCaseStr = upperCaseStr.slice(0, findWord);
	console.log("Осталось после вырезания: " + upperCaseStr);

	let newWord = word.replace(target, replace);
	console.log("Измененное слово: " + newWord);
} else {
	console.log("Нет такого слова в предложении!");
}
