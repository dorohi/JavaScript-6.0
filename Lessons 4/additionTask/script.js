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

// 4 У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
// Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
let arr = [20, 33, 1, 'Человек', 2, 3];
let sum=0;
for (let i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i])){
		console.log("Элемент: " + arr[i]);
		sum+=Math.pow(+arr[i],3);
		console.log("Сумма кубов: " + sum);
	}
}
console.log("Квадратный корень суммы кубов массива = " + Math.sqrt(sum));

//5 Создайте функцию, которая принимает 1 аргумент (название произвольное)
//Если как аргумент передана не строка - функция оповещает об этом пользователя
//В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
//Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)

function formatString(text){
	if ((typeof(text)) === 'string') {
		console.log("Строка");
		console.log(text + " | Длина строки: "+text.length);
		text = text.trim();
		console.log(text + " | Длина строки: "+text.length);
		if (text.length>50) {
			console.log(" Строка слишком длинная: "+text.length);
			let newText = text.slice(0,50) + "...";
			console.log(" Новая строка: "+newText);
		}
	} else {
		alert("Функция должна принимать строку!")
		console.log("Не строка");
	}
}

formatString('   555  adasdjas 8a9sd7 a98s7d 9a87sd98 a7s9d7 a9s7d98 7a9sd7 9a87sd97a9sd7a987sd 98a7s9d 7as98d79as87d 987   ');