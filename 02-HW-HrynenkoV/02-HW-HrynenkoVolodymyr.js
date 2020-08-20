/* let firstNumber;
let secondNumber;

firstNumber = Number(prompt ("Будь ласка напишіть перше ціле число"));
while (isNaN(firstNumber) || !Number.isInteger(firstNumber) || firstNumber==="" || !firstNumber) {
  firstNumber = Number(prompt ("Потрібно написати ЦІЛЕ число"))
}
console.log(firstNumber);

secondNumber = Number(prompt ("Будь ласка напишіть друге ціле число, але більше за перше"));

while (isNaN(secondNumber) || !Number.isInteger(secondNumber) || secondNumber==="" || firstNumber>=secondNumber) {
  secondNumber = Number(prompt ("Потрібно написати ЦІЛЕ число, яке більше за перше!"))
}

console.log(secondNumber);

const missNumber = confirm("Будемо пропускати парні числа?");
console.log(missNumber);

let sum = 0;

if(missNumber) {
  for (let z = firstNumber; z <= secondNumber; z++) {
    if(missNumber && z % 2 === 0) {continue;
    }
    sum += z;
    }
  } else {
    for(let z = firstNumber; z <= secondNumber; z++)
    sum += z;
  }
console.log(sum); */

/* let name = "";
do {
  name = prompt("Напиши своє Ім'я :)")
} while (!name || !Number || name.length < 3);
console.log('name: ', name); */

