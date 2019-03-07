//Получить кнопку "Начать расчет" через id
//Получить все блоки в правой части программы через классы (которые имеют класс название-value, 
//начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
const start = document.querySelector('#start'),
		budgetValue = document.querySelector('.budget-value'),
		daybudgetValue = document.querySelector('.daybudget-value'),
		levelValue = document.querySelector('.level-value'),
		expensesValue = document.querySelector('.expenses-value'),
		optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
		incomeValue = document.querySelector('.income-value'),
		monthsavingsValue = document.querySelector('.monthsavings-value'),
		yearsavingsValue = document.querySelector('.yearsavings-value'),
		expensesItems = document.querySelectorAll('expenses-item'),
		buttons = document.getElementsByTagName('button'),
		//buttonExpenses = document.querySelector('button .expenses-item-btn'),
		//buttonOptionalexpenses = document.querySelector('button .optionalexpenses-btn'),
		//buttonCountBudget = document.querySelector('button .count-budget-btn');
		buttonExpenses = buttons[0],
		buttonOptionalexpenses = buttons[1],
		buttonCountBudget = buttons[2],
		optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
		chooseIncome = document.querySelector('.choose-income'),
		savings = document.querySelector('.savings'),
		chooseSum = document.querySelector('.choose-sum'),
		choosePercent = document.querySelector('.choose-percent'),
		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');