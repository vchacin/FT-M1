"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function () {
  // Caso base, nodo hoja sin hijos
  if (!this.right && !this.left) return 1;
  // Tengo al menos un hijo a la izquierda
  if (!this.right) return 1 + this.left.size();
  // Tengo al menos un hijo a la derecha
  if (!this.left) return 1 + this.right.size();
  // Tengo los hijos
  return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value) {
 //Comparamos el valor
 if(value > this.value){
  // Me voy a la derecha
  // Si no hay nada a la derecha
  if (!this.right) {
    this.right = new BinarySearchTree(value);
  } else {
    // Hay algo a la derecha
    this.right.insert(value);
  }
 } else {
  // Me voy a la izquierda
  if(value < this.value){
    // Si no hay nada a la izquierda
    if(!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      // Hay algo a la derecha
      this.left.insert(value);
    }
  }
 }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) return true;
  // Reviso si debo ir a la izquiera o derecha
  if (value > this.value){
    // Si no tengo nada
    if (!this.right) return false;
    // Si tengo algo
    return this.right.contains(value);
  } else {
    // Si no tengo nada
    if (!this.left) return false;
    return this.left.contains(value);
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if (order === 'in-order' || !order){
    // Primero va a la izquierda, dsp nodo y dsp derecha
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb,order);
  } else if (order === 'pre-order'){
    // Primero el nodo, dsp a la izquierda y dsp derecha
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  } else {
    // Primero a la izquierda, dsp derecha y dsp nodo
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arreglo) {
  if (!arreglo) {
    var arreglo = [];
  }

  cb(this.value); // 20 15 25 --> 20 listo --> [15, 25]
  // Si tiene izquierda o derecha, los guardo
  this.left && arreglo.push(this.left);
  this.right && arreglo.push(this.right);

  arreglo.length && arreglo.shift().breadthFirstForEach(cb, arreglo);
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
