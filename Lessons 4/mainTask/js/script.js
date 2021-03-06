let money, time;

function start (){
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	while (isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses:{},
	income: [],
	savings: true,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let Question = prompt("Введите обязательную статью расходов в этом месяце:", ""),
				Answer = prompt("Во сколько обойдется?", "");
			if ((typeof (Question)) === 'string' && (typeof (Question)) != null &&
				(typeof (Answer)) != null && Question != '' && Answer != '' &&
				Question.length < 50 && Answer.length < 50) {
				console.log("Добавляем статью расходов!");
				appData.expenses[Question] = Answer;
				console.log(appData.expenses);
			} else {
				console.log("Некорректно введены данные статьи расходов!");
				console.log(appData.expenses);
				i--;
			}
		}
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		document.querySelector('#oneDayBudget').textContent = appData.moneyPerDay;
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay >= 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка!");
		}
	},
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
		}
	},
	chooseOptExpenses: function(){
		for (let i = 0; i < 3; i++) {
			let Question = prompt("Статья необязательных расходов?", "");
			console.log("Добавляем статью необязательных расходов!");
			appData.optionalExpenses[i + 1] = Question;
		}
	},
	chooseIncome: function(){
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		while (!isNaN(items) || items == "" || items == null) {
			console.log("Некорректно введены данные \"Дополнительный доход\"!");
			items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		}
		items = items.trim();
		let arrIncome = items.split(',');
		for (let item of arrIncome) {
			if (verifyString(item)) {
				appData.income.push(item.trim());
				console.log("Добавили: " + item);
			} else {
				console.log("НЕ добавили: " + item);
			}
		}
		let lastQuestion = prompt("Может чтото еще?","");
		if (verifyString(lastQuestion)){
			console.log("Добавили последний: " + lastQuestion);
			appData.income.push(lastQuestion);
		} else {
			console.log("НЕ добавили последний: " + lastQuestion);
		}
		appData.income.sort();

		const content = document.querySelector('#content');
		let div = document.createElement('div');
		div.className = "simple";
		div.innerHTML = "Способы доп. заработка: ";
		content.appendChild(div);
		console.log("Способы доп. заработка: ");
		appData.income.forEach(function (item, index){
			let p = document.createElement('p');
			p.className = "italic";
			p.innerHTML = (index + 1) + ") " + item;
			content.appendChild(p);
			console.log((index+1) + ") " + item);
		});
	}
};

console.log("Наша программа включает в себя данные: ");
for (let props in appData){
	console.log("appData." + props + " = " + appData[props]);
}

function verifyString(string){
	if ((typeof (string)) === 'string' && string != '' && (typeof (string)) != null && isNaN(string)) {
		return string;
	} else {
		return false;
	}
}


console.log(appData);


/*
	1) Написать проверку, что пользователь может:
	· Ввести в дополнительных доходах (chooseIncome) только строку
	· Не может оставить строку пустой
	· Не может отменить вопрос
	2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
	· Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
	3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
	4) Проверить, чтобы все работало и не было ошибок в консоли
*/