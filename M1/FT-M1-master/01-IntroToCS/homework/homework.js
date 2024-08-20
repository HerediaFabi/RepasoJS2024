"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // 1101 --> 1 + 4 + 8 = 13
  num = String(num);
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "1") {
      decimal += 2 ** (num.length - 1 - i);
    }
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  // 13 --> 13 % 2 | 6 % 2 | 3 % 2 | 1 o 0
  let binario = "";
  let aux = "";
  while (num > 1) {
    aux += num % 2;
    num = Math.floor(num / 2);
  }
  aux += num;
  for (let i = aux.length - 1; i >= 0; i--) {
    binario += aux[i];
  }

  console.log(binario);
  return binario;
}

DecimalABinario(13);

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
