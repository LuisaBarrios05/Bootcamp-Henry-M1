'use strict';

function BinarioADecimal(num) {
 var sum = 0;
 var exponente = num.length-1;

   for(let i = 0; i < num.length; i++){
      sum = sum + num[i] * 2 ** exponente; 
      exponente --;
   }
   return sum;
}

function DecimalABinario(num) {
   var resultado = "";
   while(num !== 0){
         resultado =  (num % 2) + resultado 
        num = Math.floor(num / 2)
      }
    return resultado;   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
