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
		alert("Функция должна принимать!")
		console.log("Не строка");
	}
}

formatString('   555  adasdjas 8a9sd7 a98s7d 9a87sd98 a7s9d7 a9s7d98 7a9sd7 9a87sd97a9sd7a987sd 98a7s9d 7as98d79as87d 987   ');