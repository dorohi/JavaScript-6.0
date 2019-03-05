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
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
		if (!isNaN(items) || items == '' || items == null) {
			console.log("Некорректно введены данные \"Дополнительный доход\"!");
			return false;
		}
		items = items.trim();
		appData.income = items.split(',');
		for (let item in appData.income) {
			appData.income[item] = appData.income[item].trim();
		}
		appData.income.push(prompt("Может чтото еще?",""));
		appData.income.sort();
	}
};

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