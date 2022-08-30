'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   // [1,2,4,23,5,88,6]
  
  //          [6]
  // [1,2,4,5]  [23,88]
  
  // [1,2,4]
  // [23]
  
  if (array.length <= 1) return array;
  
  let pivote = array[array.length-1];
  let menorArray = [];
  let mayorArray = [];
  
  // Comienzo a iterar despues o antes del pivote que defini
  for (let i = 0; i < array.length-1; i++){
    if (array[i] < pivote){
      menorArray.push(array[i]);
    } else {
      mayorArray.push(array[i]);
    }
  }
 
  // recursion
  return quickSort(menorArray).concat(pivote).concat(quickSort(mayorArray));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // recursivo
  // caso base: el arreglo con un solo elemento
  // funcion que divida el arreglo
  // funcion que los una adecuadamente
  
  if(array.length === 1) return array;
  let division = split(array); // [left, right]

  let left = division[0]; // left
  let right = division[1]; // right

  return paste(mergeSort(left), mergeSort(right));
}

// funcion que divide el arreglo
function split(array){
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return [left, right];
}

// funcion que une el arreglo
function paste (left, right){
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
