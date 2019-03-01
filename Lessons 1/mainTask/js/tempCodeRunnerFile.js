let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let firstQuestion  = prompt("Введите обязательную статью расходов в этом месяце:", "");
let firstAnswer = prompt("Во сколько обойдется?", "");
let secondQuestion = prompt("Введите еще одну обязательную статью расходов в этом месяце:", "");
let secondAnswer = prompt("Во сколько обойдется?", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {
		firstQuestion: firstAnswer,
		secondQuestion: secondAnswer
	},
	optionalExpenses:{},
	income: [],
	savings: false
};
console.log(appData);
document.querySelector('#oneDayBudget').textContent = appData.budget / 30;