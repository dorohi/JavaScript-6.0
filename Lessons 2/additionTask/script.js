/*
	1) Создать массив week и записать в него дни недели в виде строк
   	Вывести на экран все дни недели
   	Каждый из них с новой строчки
   	Выходные дни - жирным шрифтом
   	Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)
*/

let week = ['Понедельник', 'Вторник', 'Среда', 'Черверг', 'Пятница', 'Суббота', 'Воскресение'];
//let week = new Arrey ('Понедельник', 'Вторник', 'Среда', 'Черверг', 'Пятница', 'Суббота', 'Воскресение');
const weekOne = document.querySelector("#weekOne");
const curentDay = "Суббота";	

/* Вывод всего массива */
document.querySelector("#weekList").textContent = week;
console.log(week);

/* Вывод построчно, с применением условий */
/* Условия выполнял с помощью  добавления классов, можно было просто брать в теги, не стал реализовывать*/
for (let i = 0; i < week.length; i++) {
	if (i<5) {
		var div = document.createElement('div');
		div.className = "simple";
		if (curentDay === week[i]) div.classList.add("italic");
		div.innerHTML = week[i];
		weekOne.appendChild(div);
		console.log((i+1) + "-й день недели: " + week[i]);	
	} else {
		var div = document.createElement('div');
		div.className = "strong";
		if (curentDay === week[i]) div.classList.add("italic");
		div.innerHTML = week[i];
		weekOne.appendChild(div);
		console.log((i+1) + "-й день недели: " + week[i]);	
	}
}

console.log('-----------------------------------');	
/*
	2) Создать массив arr = []
      Записать в него 7 любых многозначных чисел в виде строк
      Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
*/

let arr = ['35498425', '5468745', '984987654', '79845654', '654687', '4987643', '79849545'];
//let arr = new Arrey ('35498425', '5468745', '984987654', '79845654', '654687', '4987643', '79849545');

/* 
	Буду выводить для наглядности все числа, только для нужных поставлю:
	"указатель =>" - если число начинается на 3 или 7
	"указатель <=" - если число заканчивается на 3 или 7
 */
for (let j = 0; j < arr.length; j++) {
	//console.log("Последняя цифра " + arr[j][arr[j].length-1]);
	if (arr[j][0] == '3' || arr[j][0] == '7') {
		console.log(" => " + (j+1) + "-е число: " + arr[j]);
	} else if (arr[j][arr[j].length-1] == '3' || arr[j][arr[j].length-1] == '7'){
		console.log(" <= " + (j+1) + "-е число: " + arr[j]);
	} else {
		console.log((j+1) + "-е число: " + arr[j]);
	}
}