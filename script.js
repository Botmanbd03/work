'use strict';

let money, time;



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};

function start() {
  let tmp;
  while (1){
    tmp = parseFloat( prompt('Ваш бюджет на месяц?', '') );
    if ( isNaN(tmp) ){
      alert('Please, enter a valid number.');
    } else {
      // money = tmp;
      appData.budget = tmp;
      break;
    }
  }
  
  time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10) );
}

function setExpenses() {
  let exps1, exps2;
  for (let i=0; i<2; i++){
    exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    exps2 = parseFloat( prompt('Во сколько обойдется?', '') );
    
    if ( (exps1 !== null && exps1 !== undefined && exps1 !== '') && !isNaN(exps2) ){
      appData.expenses[exps1] = exps2;
    } else {
      i--;
      alert('Повторите ввод, такие данные мне не нравится');
    }
  }
}

function detectLevel() {
  appData.moneyPerDay = (appData.budget / 30);
  
  alert("Ваш ежедневный бюджет"  + appData.moneyPerDay.toFixed(2));
  
  
  if (appData.moneyPerDay < 100){
    console.log('минимальный уровень достатка');
  } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('средний уровень достатка');
  } else if (appData.moneyPerDay >= 2000){
    console.log('высокий уровень достатка');
  } else {
    console.log('невозможно вычислить уровень достатка');
  }
}

function chekSavings() {
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
}

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30);
  
  alert("Ваш ежедневный бюджет"  + appData.moneyPerDay.toFixed(2));
}

function setOptExpenses() {
  appData.optionalExpenses = {};
  
  for (let i=0; i<3; i++){
    let tmp = prompt(`Введите название статьи необязательных расходов ${i+1}`, '');
    if (tmp === null || tmp === ''){
      i--;
      alert('Пожалуйста введите название');
      continue;
    }
    
    appData.optionalExpenses[i+1] = tmp;
  }
}