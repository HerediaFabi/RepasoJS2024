"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const primos = [2, 3, 5, 7, 11, 13];
  let numeros = [1];
  while (num > 1) {
    for (let i = 0; i < primos.length; i++) {
      if (num % primos[i] == 0) {
        numeros.push(primos[i]);
        num = num / primos[i];
        break;
      }
    }
  }
  return numeros;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //! RECURSIVAMENTE:
  // function bubbleSort(array, recorrido) {
  // let ordenado = true;
  // if (!recorrido) var recorrido = array.length - 1;
  // for (let i = 0; i < recorrido; i++) {
  //   if (array[i] > array[i + 1]) {
  //     ordenado = false;
  //     let aux = array[i];
  //     array[i] = array[i + 1];
  //     array[i + 1] = aux;
  //   }
  // }
  // return ordenado ? array : bubbleSort(array, recorrido - 1);

  //! ITERATIVAMENTE:
  let ordenado = false;
  let recorrido = array.length - 1;
  while (!ordenado) {
    ordenado = true;
    for (let i = 0; i < recorrido; i++) {
      if (array[i] > array[i + 1]) {
        ordenado = false;
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
    recorrido--;
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      while (array[j] < array[j - 1]) {
        let aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let menor;
  let indiceMenor = 0;
  for (let i = 0; i < array.length; i++) {
    menor = undefined;
    for (let j = i; j < array.length; j++) {
      if (!menor || array[j] < menor) {
        menor = array[j];
        indiceMenor = j;
      }
    }
    array[indiceMenor] = array[i];
    array[i] = menor;
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
