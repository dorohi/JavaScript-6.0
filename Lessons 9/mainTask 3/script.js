//Выведите на экран правильное сообщение, которое берет значение из input
//Написать скрипт в отдельном js файле

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


showUser.apply(age,['Dorohi', 'Mykhaylo']);