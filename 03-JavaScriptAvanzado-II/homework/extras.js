//  Extra Credit

/* 
### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. 

Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. 

La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
console.log('hola'.repeatify(3));   //holaholahola
```
*/

String.prototype.repeatify = function(numero) {
    if (numero <= 0){
        return '';
    } else {
        var str = '';
        for (var i = 0; i < numero; i++){
            str += this;
        }
    }
    return str;
}
console.log('hola'.repeatify(3));

/* ### Shapes

* Crea un objeto(una clase) llamado `shape` que tenga una propiedad `type` y un método `getType`. 
*/ 

class Shape {
    constructor(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }
};

/* Ahora defini una función `Triangle` cuyo prototipo(clase) sea `shape`. 
*/

/*
Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.
*/

class Triangle extends Shape {
    constructor (a,b,c) {
        super ();
        this.a = a;
        this.b = b;
        this.c = c;
        this.s = (a + b + c) / 2;
        this.type = 'Triangle';
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea () {
        return Math.sqrt(this.s * (this.s - this.a) * (this.s - this.b) * (this.s - this.c));
    }
}

var t = new Triangle(130, 244, 345);
console.log(t instanceof Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

/*
Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```
*/

/* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.
*/

class Circle extends Shape {
    constructor (radio) {
        super ();
        this.type = 'Circle';
        this.radio = radio;
    }

    getPerimeter() {
        return 2 * (Math.PI) * this.radio;
    }

    getArea() {
        return (Math.PI) * (this.radio ** 2);
    }
}

var c = new Circle(2);
console.log(c instanceof Circle);
console.log(Shape.prototype.isPrototypeOf(c));
console.log(c.getPerimeter());
console.log(c.getType());

/*
Probá tu solución con el siguiente código:

```javascript
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```
*/

/* Creá una última `shape` llamada `Square`. */

class Square extends Shape {
    constructor (side){
        super();
        this.type = 'Square';
        this.side = side;
    }

    getPerimeter () {
        return 4 * this.side;
    }

    getArea (){
        return this.side ** 2;
    }
}

var d = new Square(2);
console.log(d instanceof Square);
console.log(Shape.prototype.isPrototypeOf(d));
console.log(d.getPerimeter());
console.log(d.getType());

/* Agregá el método `getArea` de todas las `shape`s. */
console.log("Area del triangulo: ", t.getArea());
console.log("Area del circulo: ", c.getArea());
console.log("Area del cuadrado: ", d.getArea());