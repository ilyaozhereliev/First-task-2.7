// jshint esversion: 6
let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');
let answer3 = prompt('Введите обязательную статью расходов в этом месяце');
let answer4 = prompt('Во сколько обойдется?');

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(`Ваш бюджет на один день составляет ${appData.budget / 30}р`);
