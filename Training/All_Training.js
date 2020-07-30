/* alert (7 + 5);
alert (7 - 5);
alert ("BoBa");
alert (7 - 5 / 0);
alert (7 + 2 / 1 * 0); */

/* alert ("Vika");
alert (27 + 3); */

/* let name = "Vova";
const age = 26;
alert (`Privet!!! Your name is ${name} and your age is ${age}!!!`); */

/* let Vika = 25;
let Vova = 26;
alert (`Family Hrynenko ${Vika + Vova}`); */

/* const Vika = 25;
const Vova = 26;
const Natalia = 29;
const Gena = 30;
alert (Vika > Vova);
alert (Natalia < Gena);
alert (Natalia > Vova);
alert (Vika < Gena); */

/* const Vova = "null"
const Vika = 25;
console.log(Vova > Vika);
alert (Vova < Vika); */

/* let Vova;
const Vika = 25;
console.log (Vova + Vika);
alert (Vova + Vika); */

/* let Vova;
console.log (Vova);
alert (Vova); */

/* const ageVova = 26;
const ageVika = 25;
console.log(ageVova + ageVika);
console.log(ageVova - ageVika);
alert (ageVova + ageVika); */

/*let Vova = 26;
let Vika = true;
const Gena = Vova;
console.log(typeof Vova);
console.log(typeof Vika);
console.log(typeof Gena);
alert (typeof Vova);
alert (typeof Vika); */

/* let str = "null";
alert(typeof str); */

/* let age = Number("Vova");
alert (age); */

/*                                                                                              2-га домашка
while (isNaN(secondNumber)) {
  secondNumber = Number(prompt ("Потрібно написати ЦІЛЕ число"))
}

while (!Number.isInteger(secondNumber)) {
  secondNumber = Number(prompt ("Потрібно написати ЦІЛЕ число"))
}

while (secondNumber==="") {
  secondNumber = Number(prompt ("Потрібно написати ЦІЛЕ число"))
}

while (firstNumber>=secondNumber) {
  secondNumber = Number(prompt ("Потрібно написати ціле число більше за перше"))
} */

/* function greetFunc (name = "Volodymyr"){
  console.log(`Hello ${name}`);
}
greetFunc();
greetFunc("Vika"); */

/* function Vova() {
  return "25 + 26";
}
const resultFunction = Vova();
console.log(resultFunction);
document.writeln(resultFunction); */

/* function vovaVika(){
  console.log("Vova and Vika");
  console.log("Vika and Vova");
  console.log("Cursor");
}
vovaVika(); */

/* function sumNumbers(a, b) {
  return a + b;
}
if (15 +-5 > 3) {
  console.log("When sum numbers bigger then 2")
} else {
  console.log("Less than 2");
} */

/* function name(param1, param2) {
  console.log(param1);
  console.log(param2);
}
consol.log(name()); */



/* function greeting(name1, name2){

  console.log(arguments);

  if (name1 === "Vova") {
    console.log("Hi mister!")
  } else (name3 === "Vanya") 
    console.log("Hi!!!")
  

}
console.log (greeting("Vova", "Vika", "Petya", "Vanya")); */

/* const arr = [1, 2, 3, 4];

function helloSunday(...Hrynenko){
  console.log(Hrynenko);
  console.log(arguments);

}
console.log(helloSunday("Vova", "Vika")); */

/* nameHrynenko ();

function nameHrynenko () {
  console.log("Hello moto")
}

const nameHrynenko2 = function() {
  console.log("Hellow world")
}
nameHrynenko2 (); */

/* const nameHrynenko3 = () => {
console.log("Hello mister")
}
nameHrynenko3 (); */

/* const nameHrynenko4 = (a, b) => a + b > 50

console.log(nameHrynenko4 (26, 25)); */

/* let scope = 1;

function outerFunction () {
  let scope = 2;
  console.log(scope);

  function innerFunction () {
    let scope = 3;
    console.log(scope);
  }

  innerFunction ();

}

console.log(scope);
outerFunction ();

console.log(scope); */

/* (function (name){
console.log("Hello moto");
})(name) */

/* function getFactorial(n) {
  console.log(n);
  if (n === 1) return 1;

  return n * getFactorial(n - 1);
} 
console.log(getFactorial(9)); */


/* "Vova".charAt(1);
console.log(Vova.charAt(1));

"Vova".charAt(2);
console.log(Vova.charAt(2));

"Vova".charAt(3);
console.log(Vova.charAt(3));

"Vova".charAt(4);
console.log(Vova.charAt(4));

function getMaxDigit(number) {
  newNumber = number.toString().split(``);
  return Math.max(...newNumber);
}
console.log(getMaxDigit(02091939)); */

/* const HrynenkoV = 'Vova';
'Vova'.charAt(0);
console.log('Vova'.charAt(0));


"Vova".charAt(1);
"Vova".charAt(01);
console.log("Vova".charAt(1));

"Vova".charAt(2);
"Vova".charAt(2);
console.log("Vova".charAt(2));

"Vova".charAt(3);
"Vova".charAt(3);
console.log("Vova".charAt(3)); */

/* const Vova = 26;
const Vika = 25;
const Gena = 31;
console.log(Vova + Vika + 31);

"Vika Golovanyova" + "Volodymyr Hrynenko";
console.log("Vika Golovanyova" + " Volodymyr Hrynenko"); */

/* const HrynenkoV = 286;
HrynenkoV.toString();
HrynenkoV.toString().length;
HrynenkoV.toString().length.toString();

console.log(HrynenkoV.toString());
console.log(HrynenkoV.toString().length);
console.log(HrynenkoV.toString().length.toString()); */

/* const Vova = 26;
const Vika = 25;
const age = [ Vova, Vika];
console.log(age); */

/* const Hrynenko = ['Vova', 'Vika', 'Gena', 'Nataly'];
const name = +prompt(`pls write name`);

console.log(Hrynenko[name]); */

/* const arr = [[26, 25], [31, 29]];
console.log('arr: ', arr);

arr.push(200, 300);
console.log('arr: ', arr); */


/* const arr2 = new Array(['Vova', 'Vika'], ['Gena', 'Nataly']);
console.log('arr2: ', arr2); */

/* arr2.shift();
console.log('arr2: ', arr2); */


/* arr2.pop();
console.log('arr2: ', arr2); */

/* arr2.unshift(['Slava' , 'Zheka']);
console.log('arr2: ', arr2); */


/* const nameVova = [[26, 'Vova', 25, 'Vika'] , [31, 'Gena' , 29,  'Nataly']];
console.log('nameVova: ', nameVova); */

/* const a = parseInt(prompt `push number`);

const b = parseInt(prompt `push number`);

const c = parseInt(prompt `push number`);
console.log(a, b, c);

if (a >= b && a >= c) {
  console.log(`A bigger`, a);
} else if (b >= c) {
  console.log(`B bigger`, b);
} else {
  console.log(`C bigger`, c); */

  /* const Akva = ['Vova', 'Yra', 'Sasha', 'Roma'];

for (const index in Akva){
  console.log('Akvamarin: ', Akva[index]);
  } */


  

/* function biggerNumber() {
  const numbaers = [];
const maxNumbers = 3
for (let a = 0; a < maxNumbers; a++) {
  numbaers.push(parseInt(prompt `push number`));
  }

  let bigB = 0;
for (let a = 0; a < numbaers.length; a++) {
const currb = numbaers[a];
if (currb > bigB) {
  bigB = currb;

}
}
return bigB;
}
console.log(`That more big number`, biggerNumber()); */

/* function someOfNumber() {
  const number = [];
  let n;
  do {
    n = parseInt(prompt(`pls write what y want number`));
    if (!isNaN(n)){
      number.push(n);
    }
  } while(!isNaN(n));
let bigB = 0;
for (let a = 0; a < numbaers.length; a++) {
const currb = numbaers[a];
if (currb > bigB) {
  bigB = currb;

}
}
return bigB;
}
console.log(`That more big number`, someOfNumber()); */

/* const str = "hello";

const arr = str.split("");
arr.reverse();
console.log(arr.join(" ")); */


/* let arr = [26, 25];
let copyArr = arr;
console.log(arr); */


/* function nameOf (arr) {
  let count = 0;
  while (arr.includes('Vova')) {
    count ++;
    }
    return nameOf;
  }
  console.log(nameOf('Vova', 'Vova', 'Vika', 'Vlada')); */

  /* function getPair1(arr1) {
  const arr1 = getFirstPair[];
  const getPair1 = [students[0], students[2]];
  return getPair1;
}
console.log(getFirstPair());

function getSecondPair(arr2) {
  const getSecondPair = [students[1], students[3]];
  return getSecondPair;
}
console.log(getSecondPair());

function getThirdPair(arr3) {
  const getThirdPair = [students[4], students[5]];
  return getThirdPair;
}
console.log(getThirdPair());

const pairStudents = [].concat([arr1], [arr2], [arr3]);
console.log('pairStudents: ', pairStudents); */