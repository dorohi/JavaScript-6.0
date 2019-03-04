let str = "урок-3-был слишком легким";
console.log("Начальная строка: " + str);

//Сделать так, чтобы строка начиналась с большой буквы
let upperCaseStr = str[0].toUpperCase() + str.slice(1);
console.log("Результат большой буквы: " + upperCaseStr);

//Теперь замените все “-” на пробелы
let index = -1;
while ((index = upperCaseStr.indexOf("-", index + 1)) != -1) {
	upperCaseStr = upperCaseStr.slice(0,index) + " " + upperCaseStr.slice(index+1);
	console.log("Индекс по которому найден \"-\" : " + index );
	console.log("Результат: " + upperCaseStr);
}

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let target = "легким";
let findWord = upperCaseStr.indexOf(target);
console.log("Индекс найденого слова: " + findWord);
let word = upperCaseStr.slice(findWord, findWord+target.length);
console.log("Вырезаное слово: " + word);
let newWord = word.slice(0,word.length-2) + "oo";
console.log("Вырезаное слово: " + newWord);