"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  add (data){

    /*Creamos un nodo primero para tener que enlazar*/
    let node = new Node(data);
    /*Como por default nuestra lista tiene el head en null, nos fijamos ese escenario, caso contrario seguimos*/
    let current = this.head;
    if(!current){
      this.head = node;
      return node;
    }
      /* En caso de que ya exista un head definido, debemos seguir recorriendo la lista, para ello nos fijamos si en next está definido otro elemento */

    while (current.next){
      current = current.next;
    }
    current.next = node;
    return node;
    
  }

  /* Practica */

  /* Agregar al inicio de la lista -> primero crear el nuevo nodo (en este caso con un value de 8) y luego apuntarlo a lo que apunta head ( a 4 en este caso ), por último head reasignarlo al nuevo nodo. Si lo hiciéramos en caso inverso, osea, primero pusiéramos la asignación de head al nuevo nodo, perdemos la referencia del resto de la lista */

  /* addInicio(data){
    let node = new Node (data);
    let current = this.head;
    if(!current){
      this.head = node;
      return node;
    }
    node.next = this.head;
    this.head = node;
    return node;
  } */

  /* Para agregar o eliminar en una posición debemos contar los elementos */
  
  /* getAt(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
  } */

  /* insertAt(data, index){
    // Compruebo si la lista esta vacia head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // Compuebo si el nuevo nodo necesita insertarse al comienzo de la lista antes de head. 
    if (index === 0) {
       this.head = new Node(data, this.head);
       return;
    }
    // else, uso el getAt() para encontrar el nodo anterior donde quiero agregarlo
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;       

    return this.head
  } */

  remove() {
    let current = this.head;
    if (!current) return null; 
    else if (current && !current.next){
      let elemento = current.value;
      this.head = null;
      return elemento;
    } 
    while (current.next.next) {
      current = current.next;
    }
    let ultimo = current.next.value;
    current.next = null;
    return ultimo;
  }

  /* Practica */ 

  /*Eliminar el primer elemento, en ese caso head se apunta a head.next */

  /* removePrimero() {
    let current = this.head;
    if (!current) return null; 
    else if (current && !current.next){
      let elemento = current.value;
      this.head = null;
      return elemento;
    } 
    this.head = current.next;
    return current;
  } */

  /* deleteAt (index){
    if (!this.head) {
          this.head = new Node(data);
          return;
      }
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    const previous = this.getAt(index - 1);
    
    if (!previous || !previous.next) {
        return;
    }
    
    previous.next = previous.next.next;     
    return this.head
  } */

  search(value) {
    if (!this.head) return null;
    let current = this.head;
    while(current){
      if (current.value === value) return current.value;
      else if(typeof value == 'function'){
        if(value(current.value)){
          return current.value;
        }
      }
      //si no cumple las comprobaciones avanza en la iteración
      current = current.next;
    }
    return null;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 

(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor() {
    this.numBuckets = 35;
    this.buckets = [];
  }

  set(key, value){
    if (typeof key !== 'string') throw new TypeError('Keys must be strings');
    let index = this.hash(key); //donde se debe guardar
    if(!this.buckets[index]){
      this.buckets[index] = {};
    }
    this.buckets[index][key] = value;
  }

  get(key){
    let index = this.hash(key);
    return this.buckets[index][key];
  }

  hasKey(key){
    let index = this.hash(key);
    return !!this.buckets[index][key];
    // return this.buckets[index].hasOwnProperty(key);
  }

  hash(key){
    let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum+=key.charCodeAt(i);
    }
    return sum%this.numBuckets;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
