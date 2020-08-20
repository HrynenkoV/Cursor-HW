/* // №1. getMaxDigit(number) - будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  newNumber = number.toString().split(``);
  return Math.max(...newNumber);
}
console.log(getMaxDigit(02091939));

// №2. Функція, яка визначає ступінь числа.

function degreeOfNumber(number, degree) {
  let result = number;
  for (let i = 1; i < degree; i++) {
    result *= number;
  }
  return result;
}
console.log(degreeOfNumber(3, 4));

// №3. Функція - випадковий пароль.

function randomPassword(password = 8) {
  let randpass = '';
  for (let i = 0; i < password; i++) {
    randpass += Math.round(Math.random() * 9);
  }
  return randpass;
}
console.log(randomPassword());

// №4. Функція - випадкове число.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (min - max + 1) + max);
}
console.log(randomNumber(1, 654321));

// №5. Функція, перша буква завжди з великої літери.

function reformName(name) {
  let myName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return myName;
} 
console.log(reformName("VoLoDyMyR"));

// №6. Функція, скільки разів повторюється буква.

function countLetters(letters,word){
  letters = letters.toLowerCase();
  word = word.toLowerCase();
  let sumLetters = 0;
  for(let a = 0; a < word.length; a++){
      if(letters === word[a]){
          sumLetters++;
      }
      
  }
  return sumLetters;
}

console.log(countLetters("о","Володимир Віталійович Гриненко"));
console.log(countLetters("в","Володимир Віталійович Гриненко"));
console.log(countLetters("і","Володимир Віталійович Гриненко"));
console.log(countLetters("и","Володимир Віталійович Гриненко"));
console.log(countLetters("р","Володимир Віталійович Гриненко"));

document.writeln (`Функція №1 будь-яке число та виводить найбільшу цифру в цьому числі: ${getMaxDigit(02091939)} <br>
Функція №2 яка визначає ступінь числа: ${degreeOfNumber(3, 4)} <br>
Функція №3 випадковий пароль: ${randomPassword()} <br>
Функція №4 випадкове число: ${randomNumber(1, 654321)} <br>
Функція №5 перша буква завжди з великої літери: ${reformName("VoLoDyMyR")} <br>
Функція №6 скільки разів повторюється буква: ${countLetters("о","Володимир Віталійович Гриненко")}, ${countLetters("в","Володимир Віталійович Гриненко")},
${countLetters("і","Володимир Віталійович Гриненко")}, ${countLetters("и","Володимир Віталійович Гриненко")}, ${countLetters("р","Володимир Віталійович Гриненко")}`); */
