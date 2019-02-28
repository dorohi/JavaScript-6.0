let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let mandatoryExpensesFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
let mandatoryExpensesCostFirst = prompt("Во сколько обойдется?", "");
let mandatoryExpensesFirstSecond = prompt("Введите обязательную статью расходов в этом месяце", "");
let mandatoryExpensesCostFirstSecond = prompt("Во сколько обойдется?", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {
		mandatoryExpensesFirst: mandatoryExpensesCostFirst,
		mandatoryExpensesFirstSecond: mandatoryExpensesCostFirstSecond
	},
	optionalExpenses:{},
	income: [],
	savings: false
};
document.querySelector('#oneDayBudget').textContent = appData.budget / 30;