let money = +prompt("Ваш бюджет на месяц?", ""),
	 time = prompt("Введите дату в формате letletYYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses:{},
	income: [],
	savings: false
};
let i = 0;


for (i; i < 2; i++) {
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


/*
while (i<2) {
	i++;
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
*/

/*
do {
	let Question = prompt("Введите обязательную статью расходов в этом месяце:", ""),
		 Answer = prompt("Во сколько обойдется?", "");
	if ( (typeof(Question)) === 'string' && (typeof(Question)) != null &&
	(typeof(Answer)) != null && Question!='' && Answer!='' && 
	Question.length<50 && Answer.length<50){
		console.log("Добавляем статью расходов!");
		appData.expenses[Question] = Answer;
		console.log(appData.expenses);
		i++;
	} else {
		console.log("Некорректно введены данные статьи расходов!");
		console.log(appData.expenses);
	}
} while (i<2);
*/

appData.moneyPerDay = appData.budget / 30;
console.log(appData);

if (appData.moneyPerDay<100) {
	console.log("Мминимальный уровень достатка");
} else if (appData.moneyPerDay>=100 && appData.moneyPerDay<2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay>=2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка!");
}
document.querySelector('#oneDayBudget').textContent = appData.moneyPerDay;