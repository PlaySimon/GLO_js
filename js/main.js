let money = 999999; // Доход за месяц
const income = 500; // строка с дополнительными доходом
let addExpenses;
addExpenses= 'Taxi, Handy, Metro'  // строка с перечислением дополнительных расходов через запятую (минимум 3
// значения)
let deposit;
deposit= true; // любое булевое значение,
let mission;
mission= 100000000 // любое число (Какую сумму хотите накопить),
const period = 12; //число от 1 до 12

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit); // Вывести в консоль тип данных значений переменных money, income, deposit;

//console.log(income.length);
//????? Вывести в консоль длину строки income ?????

console.log('Период ' + period+ ' месяцев '+ ',', 'Цель заработать ' + mission + ' ru'); // Вывести в консоль
//“Период (period) месяцев” и “Цель заработать (mission) рублей”

console.log(addExpenses.toLowerCase());
let srt=addExpenses.toLowerCase();
console.log([addExpenses]);
console.log(addExpenses.split());
console.log(addExpenses.split(','));

/*
- Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30), вывести в консоль результат и остаток
        от деления
 */
let budgetDay;
budgetDay = money / 30;
console.log('дневной бюджет '+ budgetDay);

// sum 1) Создать переменную num со значением 266219
//
//    ·  Вывести в консоль произведение (умножение) цифр этого числа

num=266219;
let sum = 0;
for (let i=0; i<num; i++)(
    sum+=i
);
console.log(sum);

/*
2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

   ·  Вывести на экран первые 2 цифры полученного числа

???????????
 */

/*
alert( "Привет" );
alert( income );

console.log(deposit);
console.log('deposit');


 */
