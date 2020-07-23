let firstNumber;
let secondNumber;

firstNumber = Number(prompt ("Будь ласка напишіть перше ціле число"));
while (isNaN(firstNumber) || !Number.isInteger(firstNumber) || firstNumber==="") {
  firstNumber = Number(prompt ("Потрібно написати ЦІЛЕ число"))
}
console.log(firstNumber);

secondNumber = Number(prompt ("Будь ласка напишіть друге ціле число, але більше за перше"));

/* while (isNaN(secondNumber)) {
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

while (isNaN(secondNumber) || !Number.isInteger(secondNumber) || secondNumber==="" || firstNumber>=secondNumber) {
  secondNumber = Number(prompt ("Потрібно написати ЦІЛЕ число, яке більше за перше!"))
}

console.log(secondNumber);

const missNumber = confirm("Будемо пропускати парні числа?");
console.log(missNumber);

let suma = 0;

if(missNumber) {
  for (let z = firstNumber; z <= secondNumber; z++) {
    if(missNumber && z % 2 === 0) {continue;
    }
    suma += z;
    }
  } else {
    for(let z = firstNumber; z <= secondNumber; z++)
    suma += z;
  }
console.log(suma);
