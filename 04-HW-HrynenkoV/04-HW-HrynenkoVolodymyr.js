const students = ["Олександр", "Іра", "Ігор", "Олена", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розподіл студентів на пари (хлопець + дівчина);

const all_Pair = getPairs(students);
function getPairs(students) {
  const pairs = [];
  for (let i = 0; i < students.length; i++) {
    pairs.push(new Array(students[i++], students[i]));
  }
  return pairs;
}
console.log('all_Pair: ', all_Pair);

// 2. Tеми проєктів;

const themes_For_Pairs = getThemes(themes);
function getThemes(themes) {
  const allThemes = [];
  for (let a = 0; a < themes.length; a++) {
    allThemes.push(new Array(all_Pair[a].join(" та ")));
    allThemes[a].push(themes[a]);
  }
  return allThemes;
}
console.log('themes_For_Pairs: ', themes_For_Pairs);

// 3. Оцінки(marks);

const marks_For_Students = getMarks(marks);
function getMarks(marks) {
  const allMarks = [];
  for (let a = 0; a < students.length; a++) {
    allMarks.push(new Array(students[a], marks[a]));
  }
  return allMarks;
}
console.log('marks_For_Students: ', marks_For_Students);

// 4. Випадкова оцінка;

const random_Marks = random__Marks();
function random__Marks() {
    return Math.floor(Math.random() * 5) + 1;
}
console.log('randomMarks: ', random_Marks);


const all_Random_Marks = getrandomMarks(students, all_Pair, themes_For_Pairs);
function getrandomMarks(students, all_Pair, themes_For_Pairs) {
    const studentsRandomMark = [];
  for (a = 0; a < all_Pair.length; a++) {
    studentsRandomMark.push([all_Pair[a].join(' та '), themes[a], random__Marks()]);
  }
  return studentsRandomMark;
}
console.log('all_Random_Marks: ', all_Random_Marks);

