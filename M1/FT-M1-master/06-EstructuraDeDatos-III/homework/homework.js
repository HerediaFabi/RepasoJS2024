"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) {
    count += this.left.size();
  }
  if (this.right) {
    count += this.left.size();
  }
  return count;
};

BinarySearchTree.prototype.insert = function (num) {
  if (this.value != num) {
    if (num < this.value) {
      this.left
        ? this.left.insert(num)
        : (this.left = new BinarySearchTree(num));
    } else if (num > this.value) {
      this.right
        ? this.right.insert(num)
        : (this.right = new BinarySearchTree(num));
    }
  } else {
    console.log("El valor ingresado ya se encuentra dentro del árbol");
  }
};

BinarySearchTree.prototype.contains = function (num) {
  if (this.value == num) {
    return true;
  } else {
    if (this.left) {
      if (this.left.contains(num)) return true;
    }
    if (this.right) {
      if (this.right.contains(num)) return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  switch (order) {
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;

    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;

    default:
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, pendientes) {
  if (!pendientes) var pendientes = [this.value];
  cb(this.value);
  pendientes.shift();
  this.left && pendientes.push(this.left);
  this.right && pendientes.push(this.right);
  pendientes.length && pendientes[0].breadthFirstForEach(cb, pendientes);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
