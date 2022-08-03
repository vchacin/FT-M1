'use strict'

function BinarioADecimal(num) {
  let suma = 0;

  for (let i = 0; i < num.length; i++) {
    suma += +num[i] * 2 ** (num.length - 1 - i);
  }

  return suma;
}

function DecimalABinario(num) {
  let binario = [];
  
  while (num > 0){
    let digito = num % 2;
    num = Math.floor(num / 2);
    binario.unshift(digito);
  }
  
  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}