// string, boolean, number, ...
let x:number = 10;

x = 12;

console.log(x);

// inferencia x annotation

// Nas duas formas as variáveis estão tipadas
let y = 12; // ==> inferencia
// y = 't'; /* ERRO */

let z:number = 12; // ==> annotation
// z = 't' /* ERRO */


// ==> Tipos básicos
let firstName:string = 'Miguel';
let age:number = 18;
const isAdmin:boolean = true;

// String != string

console.log(typeof firstName);

firstName = 'João';

console.log(firstName);

// ==> Object

// array numérico
const myNumbers:number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);

// ==> Tuplas
let myTuple: [number, string, string[]];

myTuple = [age, firstName, ['a', 'b']];

// myTuple = [true, false, false];

// ==> Object Literals -> {prop: value}
const user:{name:string, age:number} = {
  name: 'Miguel',
  age: 18
  // age: '18'
}

console.log(user);

console.log(user.name);

// user.job = 'Programador';

// Any
let a:any = 0;

a = 'teste';
a = true;
a = [];

// ==> Union Type
let id: string | number = '1';
id = 1;
// id = true;

// ==> Type Alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = '10';

// ==> Enum
// tamanho de roupas (size: Médio, size: Pequeno) -- Forma mais longa e trabalhosa
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa = {
  name: 'Camisa Gola V',
  size: Size.G
}

console.log(camisa);

// ==> Literal Types
let teste: 'AlgumValor' | null; // Só aceita 'AlgumValor' ou null

teste = 'AlgumValor';
teste = null;

// ==> Functions
function sum(a:number, b:number) {
  return a + b;
}

console.log(sum(1, 2));
// console.log(sum('1', '2'));

function sayHelloTo(name:string): string /* Tipo de Retorno */ {
  return `Hello ${name}`;
  // return 1;
}

console.log(sayHelloTo('Miguel'));

function logger(msg:string): void {
  console.log(msg);
}

logger('Teste');

function greeting(name:string, greet? /* Opcional */:string): void {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }

  console.log(`Olá ${name}`);
}

greeting('Miguel');
greeting('Luís', 'Sir');

// ==> Interfaces
interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 3, n2: 3}));

function multiplyNumbers(nums: MathFunctionParams): number {
  return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
  n1: 3,
  n2: 3,
};

console.log(multiplyNumbers(someNumbers));

// ==> Narrowing --> Checagem de tipos
function doSomething(info: number | boolean) {
  if (typeof info === 'number') {
    console.log(`O número é ${info}`);
    return;
  }

  console.log('Não foi passado um número');
}

doSomething(1);
doSomething(true);
// doSomething('true'); /* ERRO */

// ==> Generics
function showArrayItems<T> /* T e U são muito utilizados */(arr: T[]): void {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  })
}

const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];

showArrayItems(a1);
showArrayItems(a2);
// showArrayItems('teste'); /* Não é um array */

// ==> Classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isAppproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isAppproved;
  }

  showUserName(): void {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean): void {
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

// Interfaces em Classes
interface IVehicle /* Geralmente começam com 'I' - boas práticas */ {
  brand: string,
  showBrand(): void
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car('Volkswagen', 4);
fusca.showBrand();

class Truck implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do caminhão é ${this.brand}`);
  }
}

const truck  = new Truck('Scania', 6);
truck.showBrand();

// ==> Herança

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: string) {
    super(brand, wheels); // Passa pra classe pai
    this.engine = engine;
  }
}

const newCar = new SuperCar('Audi', 4, 'v8');

console.log(newCar);
newCar.showBrand();

// Decorators
function BaseParamenters() {
  return function <T extends {new (...args: any[]):{}}>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    }
  }
}

@BaseParamenters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person('Sam');

console.log(sam);