'use strict';

let money, time;

function start() {
 money = +prompt("Ваш бюджет на месяц?","");
 time = prompt("Введите дату в формате YYYY-MM-DD","");

 while (isNaN(money)|| money == '' || money == null ) {
   money = prompt("Ваш бюджет?","");
 }
}
start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false,
  chooseExpenses : function() {
    for(let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце',''),
      b =  prompt('Во сколько обойдется?', '');
  
  if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
      && a != '' && b != '' && a.length < 50 ) {
          console.log("done");
          appData.expenses[a] = b;
  } else {
      i = i - 1;
  }
}  
  } ,
  detectDayBudget : function() {
    appData.moneyPerDay = (appData.budget / 30);
  
    alert("Ваш ежедневный бюджет"  + appData.moneyPerDay.toFixed(2));
  },
  detectLevel : function() {
    if (appData.moneyPerDay < 100){
      console.log('минимальный уровень достатка');
    } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log('средний уровень достатка');
    } else if (appData.moneyPerDay >= 2000){
      console.log('высокий уровень достатка');
    } else {
      console.log('невозможно вычислить уровень достатка');
    }
  },
  checkSavings : function () {
    let tmp, save;
  if (appData.savings){
    // пытаем пользователя пока не расколется!
    while ( isNaN(tmp) ){
      tmp = parseFloat( prompt('Какова сумма ваших накоплений?') );
    }
    save = tmp;
    tmp = null;
    
    while ( isNaN(tmp) ){
      tmp = parseFloat( prompt('Под какой процент?') );
    }
    
    appData.monthIncome = save/100/12*tmp;
    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
  }
}, 
choseOptExpenses : function() {
  for (let i = 1; i < 3; i++) {
    let opt = prompt("Статья необязательных расходов?","");
    appData.optionalExpenses[i]= opt;
    
  }
},
chooseIncome : function() {
  let items = '';
  while (items === '' || !isNaN(+items) || items === null) {
  items = prompt("Что принесет дополнительный доход? (Перечислите через запятую","");
}
  appData.income = items.split(', ');
  appData.income.push(prompt("Может что- то еще?"));
  appData.income.sort();
  
  items = 'Способы доп. заработка: \n';
  appData.income.forEach((el, i) => items += `${i + 1}. ${el} \n`);
  document.write(items.replace(/\n/g, '<br>'));
}
  
};

appData.chooseIncome();

console.log('В итоге наша программа включает в себя данные:');
for (let i in appData) {
  console.log(i, appData[i]);
}
