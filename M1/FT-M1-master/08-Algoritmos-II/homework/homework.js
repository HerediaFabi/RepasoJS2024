"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //Elegir un elemento de la lista de elementos a ordenar, al que llamaremos pivote.
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[Math.floor(array.length / 2)];
  let smaller = [];
  let larger = [];
  let equals = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      smaller.push(array[i]);
    } else if (array[i] > pivot) {
      larger.push(array[i]);
    } else {
      equals.push(array[i]);
    }
  }
  return [...quickSort(smaller), ...equals, ...quickSort(larger)];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length == 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  left = mergeSort(left);
  right = mergeSort(right);

  let merge = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merge.push(left.shift());
    } else {
      merge.push(right.shift());
    }
  }

  left.length > 0 ? merge.push(...left) : merge.push(...right);
  return merge;
}

console.log(mergeSort([5, 1, 4, 2, 8]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
