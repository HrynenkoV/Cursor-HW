// const answer = prompt("What is your name?");
// console.log('answer: ', answer);

/* const answer = confirm("Ти щось хочеш?");

if (answer) {
  const wait = prompt("Що ти хочеш, їсти чи пити?");
  console.log('wait: ', wait);
} else {
  const eat = confirm("Щось солодке?");
  console.log('eat: ', eat);
}; */

/* const visit = confirm("Y want number?");
const allNumber = number = 50;

if (visit > 10 || !NaN) {
  const number1 = +prompt("Write y number pls");
  console.log('number1: ', number1);
  } else if (visit < 10) {
    const number2 = +prompt("repeat y number pls");
    console.log('number2: ', number2);
  } else {
    const number3 = +confirm("Y want number 5?");
    console.log('number3: ', number3);
  } */

  /* let answer = prompt("What is y favorit fruits?");
  answer = answer.toLowerCase();
  console.log('answer: ', answer);

  if (answer === "apple") {
    console.log("Its true :)");
  } else if (answer === "banana") {
      console.log("Beautifull");
  } else if (answer === "fruits") {
  console.log("YES");
 } else {
    console.log("its wrong");
  } */

  /* if ("boolean") {
    console.log("its true")
  } else {
    console.log("Its false")
  } */

  /* console.log(Boolean(-265)); */

  /* let mashine = confirm("Its VW?");

  if (mashine) {
    const otvet = prompt("Ok, what is y car?")
    console.log('otvet: ', otvet);
  } else {
      let otvet2 = confirm("Maybe y want VW?")
    console.log('otvet2: ', otvet2);
  if (otvet2) {
    const audi = prompt("AUDI is now VW :)")
    console.log('otvet3: ', otvet2);
    if (audi === "") {
            prompt("what is model y want? Golf, passat or maybe Taureg?")
            console.log('audi: ', audi);
    }
  } 
  else {
    console.log("Ok, if y want 1-ka, go to the . . .  XD")
  } 
} */


/* const result = 26 < 25 ? console.log('yes, Vova is bigger') : console.log('yes, Vika is bigger') */

/* let Vova = 26;

switch(Vova) {
  case "Vika":
    console.log("Yes, Vika");
    break;
    case "Gena":
      console.log('Yes, Gena');
      break;
      default:
      console.log("Yes, Natali");
      break
} */

/* let Vova = " ";

while (Vova !== "Hrynenko") {
  let Vova = prompt("How old Vova?");
}
console.log("Yes, second name"); */

/* let answer = '';

let counter = 0;

do {
  answer = prompt('which is the best school?')
  if ('vova' === answer) {
    continue;
  }
  counter++;
} while (counter < 3 && answer !== 'cursor') ;

console.log('hello'); */

for (let counter = 0; counter <3; counter++); {
let answer = prompt('which is the best school?');
if (answer === 'cursor') {
  console.log('ok');
  break;
  }
}