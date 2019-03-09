const startBtn = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	
	expensesItems = document.querySelectorAll('.expenses-item'),
	buttons = document.getElementsByTagName('button'),
	buttonExpenses = buttons[0],
	buttonOptionalexpenses = buttons[1],
	buttonCountBudget = buttons[2],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checksavings = document.querySelector('.checksavings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),

	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
let money, time;
let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses:{},
	income: [],
	savings: false
};

buttonExpenses.disabled = true;
buttonOptionalexpenses.disabled = true;
buttonCountBudget.disabled = true;

startBtn.addEventListener('click', () => {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth()+1;
	dayValue.value = new Date(Date.parse(time)).getDay();
	money = +prompt("Ваш бюджет на месяц?", "");
	while (isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
});

buttonExpenses.addEventListener('click', () =>{
	let sum = 0;
	for (let i = 0; i < expensesItems.length; i++) {
		let Question = expensesItems[i].value,
			Answer = expensesItems[++i].value;
		if ((typeof (Question)) === 'string' && (typeof (Question)) != null &&
			(typeof (Answer)) != null && Question != '' && Answer != '' &&
			Question.length < 50 && Answer.length < 50) {
			appData.expenses[Question] = Answer;
			sum += +Answer;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
	buttonCountBudget.disabled = false;
});

buttonOptionalexpenses.addEventListener('click', () => {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		let Question = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = Question;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
	}
});

buttonCountBudget.addEventListener('click', () => {
	if (appData.budget){
		const expen = +expensesValue.textContent;
		console.log('expen = ' + expen);
		appData.moneyPerDay = ((appData.budget - expen) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay >= 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка!";
		}
	} else {
		budgetValue.textContent = "Произошла ошибка!";
		//alert("Сначала нодо ввести бьюджет!");
	}
});

chooseIncome.addEventListener('input', () => {
	let items = chooseIncome.value;
	appData.income = items.split(',');
	incomeValue.textContent = appData.income;
});

checksavings.addEventListener('click', () => {
	appData.savings ? appData.savings = false : appData.savings = true;
});

chooseSum.addEventListener('input', () =>{
	if (appData.savings){
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;	
		appData.yearIncome = sum / 100 * percent;	
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', () =>{
	if (appData.savings){
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;	
		appData.yearIncome = sum / 100 * percent;	
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let countExpenses = {};
expensesItems.forEach((item, index) => {
	item.addEventListener('input', () => {
		if (item.value) {
			countExpenses[index] = item.value;
		}
		const count = Object.getOwnPropertyNames(countExpenses);
		if (count.length==expensesItems.length) {
			buttonExpenses.disabled = false;
		} 
	});
});

let countOptionalexpenses = {};
optionalexpensesItem.forEach((item, index) => {
	item.addEventListener('input', () => {
		if (item.value) {
			countOptionalexpenses[index] = item.value;
		}
		const count = Object.getOwnPropertyNames(countOptionalexpenses);
		if (count.length==optionalexpensesItem.length) {
			buttonOptionalexpenses.disabled = false;
		} 
	});
});