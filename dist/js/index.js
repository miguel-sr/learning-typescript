"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = 'Miguel';
let age = 18;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'João';
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);
let myTuple;
myTuple = [age, firstName, ['a', 'b']];
const user = {
    name: 'Miguel',
    age: 18
};
console.log(user);
console.log(user.name);
let a = 0;
a = 'teste';
a = true;
a = [];
let id = '1';
id = 1;
const userId = 10;
const productId = '10';
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa Gola V',
    size: Size.G
};
console.log(camisa);
let teste;
teste = 'AlgumValor';
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Miguel'));
function logger(msg) {
    console.log(msg);
}
logger('Teste');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting('Miguel');
greeting('Luís', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 3, n2: 3 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 3,
    n2: 3,
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
doSomething(1);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isAppproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isAppproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const newUser = new User('Miguel', 'Programador', true);
console.log(newUser);
newUser.showUserName();
newUser.showUserRole(false);
newUser.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car('Volkswagen', 4);
fusca.showBrand();
class Truck {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do caminhão é ${this.brand}`);
    }
}
const truck = new Truck('Scania', 6);
truck.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const newCar = new SuperCar('Audi', 4, 'v8');
console.log(newCar);
newCar.showBrand();
function BaseParamenters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamenters()
], Person);
const sam = new Person('Sam');
console.log(sam);
