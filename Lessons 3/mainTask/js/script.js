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
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let Question = prompt("Введите обязательную статью расходов в этом месяце:", ""),
			 Answer = prompt("Во сколько обойдется?", "");
		if ( (typeof(Question)) === 'string' && (typeof(Question)) != null &&
		(typeof(Answer)) != null && Question!='' && Answer!='' && 
		Question.length<50 && Answer.length<50){
			console.log("Добавляем статью расходов!");
			appData.expenses[Question] = Answer;
			console.log(appData.expenses);
		} else {
			console.log("Некорректно введены данные статьи расходов!");
			console.log(appData.expenses);
			i--;
		}
	}
}
chooseExpenses();

function chooseOptExpenses(){
	for (let i = 0; i < 3; i++) {
		let Question = prompt("Статья необязательных расходов?", "");
		console.log("Добавляем статью необязательных расходов!");
		appData.optionalExpenses[i] = Question;
	}
}
chooseOptExpenses();

function detectDayBudget(){
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	document.querySelector('#oneDayBudget').textContent = appData.moneyPerDay;
}
detectDayBudget();

function detectLevel(){
	if (appData.moneyPerDay<100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay>=100 && appData.moneyPerDay<2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay>=2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка!");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?",""),
			 percent = +prompt("Под какой процент?","");
		
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
	}
}
checkSavings();

console.log(appData);