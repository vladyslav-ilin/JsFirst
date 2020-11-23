'use strict';

(function () {
   let calcBtn = document.querySelector('.calc');
   calcBtn.onclick = infoSize;

   let chocolateBtn = document.querySelector('.chocolate');
   chocolateBtn.onclick = chocoPrice;

   let bankBtn = document.querySelector('.bank');
   bankBtn.onclick = bankPercent;

   let bornBtn = document.querySelector('.age');
   bornBtn.onclick = dateBorn;

   let yearBtn = document.querySelector('.year-btn');
   yearBtn.onclick = yearCheck;
})();

function infoSize() {
   let size = prompt('Введите обьем флешки, Gb'),
      value = Math.floor((+(size) * 1024) / 820);

   info.innerHTML = `На флешку поместится: ${value} файла`;

   if (size < 1) {
      alert('Недостаточно памяти');
   }

   if (size === '') {
      alert('Введите значение');
   }

}

function chocoPrice() {
   let howMuch = prompt('Сколько у меня денег'),
      priceOne = prompt('Цена шоколадки'),
      result = Math.floor(+(howMuch) / +(priceOne)),
      surrender = (+(howMuch) - (+(priceOne) * +(result))).toFixed(2);

   choco.innerHTML = `Ты можешь купить: ${result}`;
   money.innerHTML = `Твоя сдача: ${surrender}`;
}

function bankPercent() {
   let total = prompt('Введите, сумму вклада, $'),
      date = 365,
      time = 61,
      how = 5,
      answer = ((parseInt(total) * how * time) / (date * 100)),
      result = answer.toFixed(2);

   percent.innerHTML = `Вы должны банку ${result}`;
}

function dateBorn() {
   let old = prompt('Введите, в каком году, вы родились', 1996),
      result = 2020 - parseInt(old);


   if (result <= 11) {
      born.innerHTML = `Вы ребенок`;
   } else if (result === 12) {
      born.innerHTML = `Вы в переходном возрасте`;
   } else if (result >= 13 && result < 18) {
      born.innerHTML = `Вы подросток`;
   } else if (result >= 18 && result < 60) {
      born.innerHTML = `Вы взрослый`;
   } else if (result >= 60 && result < 100) {
      born.innerHTML = `Вы пенсиорер`;
   } else if (result > 100) {
      born.innerHTML = `Вы безсмертный`;
   }

}

function yearCheck(){
   let leap = prompt('Какой год, хотите узнать?');

   if ((leap % 4 === 0 && leap % 100 !== 0) || leap % 400 === 0){
      alert('Высокосный год');
   }  else {
      alert('Невысокосный год');
   }

}


