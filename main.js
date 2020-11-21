'use strict';

(function (){
  let calcBtn = document.querySelector('.calc');
  calcBtn.onclick = infoSize;
})();

function infoSize(){
  let size = prompt ('Введите обьем флейши, Gb'),
      value = Math.floor((parseInt(size) * 1000) / 820);

info.innerHTML = `На флешку поместится: ${value} файла`;

   if (size < 1) {
      size = alert ('Недостаточно памяти');
   } 
   
   if (size === '' || size === null) {
      size = 'Введите значение';
   }
      
};