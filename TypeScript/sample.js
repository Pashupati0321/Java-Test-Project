var fname = 'Jack';
fname = 'Prashant';
var array = [];
array.push("Hi");
function sum(a, b) {
    return a + b;
}
//Tuples
var address;
address = [1, "Hi", 20];
var Aperson; //? optional
Aperson = { name: 'A', age: 20 };
Aperson = { name: 'B' };
function add(a, b) {
    return a + b;
}
console.log(add('1', '2'));
console.log(add('1'));
var p;
p = { name: 'A', age: 20, id: 123 };
var p1; //Union
p1 = { name: 'A', age: 20, id: 10, roll: 12 };
p1 = { name: 'A', age: 20, id: 10 };
p1 = { name: 'A', age: 20, roll: 10 };
var p2; //Intersection
p1 = { name: 'A', age: 20, id: 10, roll: 12 };
var c;
c = 'o';
c = 1;
var a = []; //never array
//a.push('hi');
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
console.log(c2.brand);
//Private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Volvo');
c3.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return CarC;
}());
var CarD = /** @class */ (function () {
    function CarD(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarD;
}());
//Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(1, 2));
console.log(gen([1], [2]));
