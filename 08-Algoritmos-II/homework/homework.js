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

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
