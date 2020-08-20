const apple = 15.678;
const kivi = 123.965;
const banana = 90.2345;
const push$ = 500;

const maxNumber = Math.max(apple, kivi, banana);
console.log('maxNumber: ', maxNumber);
document.writeln("Максимальне число", maxNumber);

const minNumber = Math.min(apple, kivi, banana);
console.log('minNumber: ', minNumber);
document.writeln("Мінімальне число", minNumber)

const total = apple + kivi + banana;
console.log('total: ', total);
document.writeln("Сума всіх значень", total)

const flooor = Math.floor(apple + kivi + banana);
console.log('flooor: ', flooor);
document.writeln("Округлення", flooor)

const floorTotal = Math.round(total);
console.log('floorTotal: ', floorTotal);
document.writeln("Округлення до сотих", floorTotal)

// const trueOrFalse = Boolean(total) === 'Yes';
// console.log('trueOrFalse: ', trueOrFalse);

const zdacha = ((push$ - total).toFixed(2));
console.log('zdacha: ', zdacha);
document.writeln("Решта з 500 грн. округлена до 2 знаків після коми", zdacha)

const price = 100;

const sale = (price - (Math.random(1) * 99)).toFixed(2);
console.log('sale: ', sale);
document.writeln("Знижка з округленням", sale)

const all = ((price - sale) / 2).toFixed(0);
console.log('all: ', all);
document.writeln("Чистий прибуток", sale)