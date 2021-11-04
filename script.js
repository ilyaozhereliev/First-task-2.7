// jshint esversion: 6
let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?');
	time = +prompt('Введите дату в формате YYYY-MM-DD');

	while (isNaN(money) || money === '' || money === null) {
		money = +prompt('Ваш бюджет на месяц?');
	}
}
start();

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt(
				'Введите обязательную статью расходов в этом месяце',
				''
			);
			let b = +prompt('Во сколько это обойдется?', '');

			if (
				typeof a === 'string' &&
				typeof a !== null &&
				typeof b !== null &&
				a !== '' &&
				b !== '' &&
				a.length < 50
			) {
				appData.expenses[a] = b;
			} else {
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert(`Ежедневный бюджет: ${appData.moneyPerDay} рублей`);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log(`Минимальный уровень достатка`);
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log(`Средний уровень достатка`);
		} else if (appData.moneyPerDay > 2000) {
			console.log(`Высокий уровень достатка`);
		} else {
			console.log(`Произошла ошибка`);
		}
	},
	checkSavings: function () {
		if (appData.savings === true) {
			let save = +prompt('Какова сумма накоплений?');
			let percent = +prompt('Под какой процент?');

			appData.mounthIncome = (save / 100 / 12) * percent;
			alert(`Доход в месяц с вашего депозита: ${appData.mounthIncome}`);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++) {
			let a = prompt('Статья необязательных расходов в этом месяце?');
			let b = +prompt('Во сколько это обойдется?');

			if (
				typeof a === 'string' &&
				typeof a !== null &&
				typeof b !== null &&
				a !== '' &&
				b !== '' &&
				a.length < 50
			) {
				appData.optionalExpenses[a] = b;
			} else {
				i--;
			}
		}
	},
	chooseIncome: function () {
		let items = prompt(
			`Что принесет дополнительный доход? (Перечислите через запятую.)`
		);

		while (
			typeof items !== 'string' ||
			items === '' ||
			typeof items === null
		) {
			alert(
				`Вы не можете ввести числа и оставить строку пустой. Пожалуйста, ответьте еще раз.`
			);
			items = prompt(
				`Что принесет дополнительный доход? (Перечислите через запятую.)`
			);
		}
		appData.income = items.split(', ');
		appData.income.push(prompt(`Может, что-то еще?`));
		appData.income.sort();

		appData.income.forEach(function (item, i) {
			alert(`Способы дополнительного заработка: ${i + 1}: ${item}`);
		});
	},
};

for (let key in appData) {
	console.log(
		`Наша программа включает в себя данные: ${key} - ${appData[key]}`
	);
}
