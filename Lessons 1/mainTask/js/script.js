let money = prompt("Ваш бюджет на месяц?", "");
const time = prompt("Введите дату в формате letletYYYY-MM-DD", "");
const firstQuestion = prompt("Введите обязательную статью расходов в этом месяце:", "");
const firstAnswer = prompt("Во сколько обойдется?", "");
const secondQuestion = prompt("Введите еще одну обязательную статью расходов в этом месяце:", "");
const secondAnswer = prompt("Во сколько обойдется?", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {
		[firstQuestion]: firstAnswer,
		[secondQuestion]: secondAnswer
	},
	optionalExpenses:{},
	income: [],
	savings: false
};
console.log(appData);
document.querySelector('#oneDayBudget').textContent = appData.budget / 30;