let fname: string = 'Jack';
fname = 'Prashant';

let array: string[] = []
array.push("Hi")

function sum(a:number, b:number):number
{
return a+b;
}

//Tuples
let address: [number, string, number]
address = [1,"Hi",20]

let Aperson: {name:string, age?:number} //? optional
Aperson = {name:'A',age:20};
Aperson = {name:'B'}

function add(a:string, b?:string){
    return a+b;
}
console.log(add('1','2'));
console.log(add('1'));

interface Person{
name:string
age:number
id?:number
}
let p: Person;
p={name:'A',age:20,id:123}

interface Student{
    name:string
    roll:number
    age:number
}

let p1: Person | Student //Union
p1 = {name:'A',age:20, id:10, roll:12}
p1 = {name:'A',age:20, id:10}
p1 = {name:'A',age:20, roll:10}

let p2 : Person & Student //Intersection
p1 = {name:'A',age:20, id:10, roll:12}

//Type alias//
type Count = string|number
let c: Count;
c='0'
c=1
//c=false

type X = string & number //never
let a: [] = [] //never array
//a.push('hi');

class Car{
    brand;
    constructor(brand){
        this.brand=brand;
    }
    getBrand(){
        console.log(this.brand);
    }    
}
let c1 = new Car('Audi');
c1.getBrand();


class CarX{              //In TypeScript
    constructor(public brand){
    }
    getBrand(){
        console.log(this.brand);
    }    
}
let c2 = new CarX('BMW');
c2.getBrand();
console.log(c2.brand);

//Private
class CarY{              
    constructor(private brand){
    }
    getBrand(){
        console.log(this.brand);
    }    
}
let c3 = new CarY('Volvo');
c3.getBrand();
//console.log(c3.brand);

//implements
interface ICar{
    brand:string
    model:string

}
class CarC implements ICar{
    constructor(public brand, public model){

    }
}

interface ICar2{
   release:number;

}
class CarD implements ICar2, ICar{
    constructor(public brand, public model, public release){

    }
}

//Generics
function gen<T>(a:T, b:T): T[]{
return [a,b];
}

console.log(gen<string>('1','2'));
console.log(gen<number>(1,2));
console.log(gen<Array<number>>([1],[2]));


function addUser<T extends {id:number}>(user:T){
return user.id;
}

// any type
function NoRestrictions<T>(a:any, b:any): any{
    return a+b;
}


