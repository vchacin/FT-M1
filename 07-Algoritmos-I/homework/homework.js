'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // function esPrimo(numero) {

  //   if (numero < 2) return false;
  //   if (numero === 2) return true;
    
  //   for(var i = 2; i < numero; i++) {

  //     if(numero % i === 0) {
  //       return false;
  //     }

  //   }

  //   return true;
  // }
  // g
  // if (num < 0 || num < 2) return false;
  // let lista = [];
  // while(num/2 == 0){
  //   num = num/2;
  //   lista.push(num);
  // }
  // console.log(lista);
}

factorear(33);

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  console.time('loop');
  let isSorted = false;
  while (!isSorted){
    isSorted = true;
    let lastSorted = array.length-1;
    for (let i = 0; i < array.length-1; i++){
      if (array[i] > array[i+1]){
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        isSorted = false;
        lastSorted--;
      }
    }
  }
  console.timeEnd('loop');
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //[7,4,5,2]
  //   i
  // j


  for (let i = 1; i<array.length; i++){
    var j = i-1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
