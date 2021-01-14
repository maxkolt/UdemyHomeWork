//1ая домашка по числам
const pi = Number(Math.PI.toFixed(2));
console.log(pi)
//
const arrMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const arrMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(arrMin);
console.log(arrMax);
//
const arrNum = Number(Math.random().toFixed(2));
console.log(arrNum);
//
const num = 15;
const a = Math.round(Math.random() * num);
console.log(a);
//
const value = (0.6 * 10 + 0.7 * 10) / 10;
console.log(value);
//
const numStr = parseFloat('100$');
console.log(numStr);

//2ая домашка по строкам
let string = "some test string";
const foo = string[0];
const foot = string[string.length - 1];
console.log(foo);
console.log(foot);
// с этим кодом нужно разобраться еще раз
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);
//
const str = string.indexOf('string');
console.log(str);
//
const index = string.indexOf(' ');
const indexLen = string.indexOf(' ', index + 1);
console.log(indexLen);
//
const substr = string.substr(5, 4);
console.log(substr);
//
const ctr = string.slice(5, 10);
console.log(ctr);
//
const fix = string.slice(0, -6);
console.log(fix);
//
const i = 20, b = 21;
const numSt = String(i) + String(b);
console.log(numSt);
//3ая домашка по обьектам
const item = {
    product: 'iphone'
}
item.price = 1000;
item.currency = 'dollar';
console.log(item);
//
item.details = {};
item.details.model = "XR";
item.details.color = "Red";
//4ая домашка логические операторы
const g = 'hidden';
if (g === 'hidden') {
    console.log('visable');
} else {
    console.log('hidden');
}
//
const d = 10;
if (d === 10) {
    console.log(1);
} else if (d <= 0) {
    console.log('less then zero');
} else (c *= 10);
//
let car = {name: 'Lexus', age: 10, create: 2008, needRepair: false}
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true
} else {
    car.needRepair = false
}
//
let itemy = {name: 'Intel core i7', price: '100$', discount: '15%'};


//
let product = {
    name: "Яблоко",
    price: "10$"
};
const productPrice = parseFloat(product.price);
let min = 10;
let max = 20;
if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено');
}
//5ая домашка по тернарным операторам switch.case
const r = 'block';
switch (r) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'lane':
        console.log('line');
        break;
    default:
        console.log('other');
}
//
let o = 'hidden';
o = o === 'hidden' ? 'visible' : 'hidden';
//
let c = 0;
c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
//6ая домашка по циклам
let sti = 'i am in the easycode';
let res = '';
for (let i = 0; i < sti.length; i++) {
    if (i === 0 || sti[i - 1] === ' ') {
        res += sti[i].toUpperCase();
    } else {
        res += sti[i];
    }
}
console.log(res);
//
let stro = 'tseb eht ma i';
let resa = '';
for (let i = stro.length; i--;) {
    resa += stro[i];
}
console.log(resa);
//
let rez = 1;
for (let i = 1; i <= 10; i++) {
    rez *= i;
}
console.log(rez)
//
let abc = 'JavaScript is a pretty good language';
let bce = '';
for (let i = 0; i < abc.length; i++) {
    if (i === 0 || abc[i - 1] === ' ') {
        bce += abc[i].toUpperCase();
    } else if (abc[i] !== ' ') {
        bce += abc[i];
    }
}
console.log(bce);
//
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let num of arr) {
    if (num % 2) {
        console.log(num);
    }
}
//
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}
for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);
//
for (el of array) {
    let isGrome = (el % 2) === 0;

    if (isGrome) {
        console.log(el);
    }
}

//задачи на функции
function multiply() {
    if (arguments.length === 0) return 0;
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i]))
            res *= arguments[i];
    }
    console.log(res);
    return res;
}

multiply(1, 5, 3, 4);
multiply();

//
function reverseString(str) {
    let string = String(str);
    let res = '';

    for (let i = string.length; i--;) {
        res += string[i];
    }
    return res;
}

console.log(reverseString('test'))
console.log(reverseString(''))
console.log(reverseString(null))
console.log(reverseString(undefined))
console.log(reverseString())

//
function getCodeStringFromText(str) {
    let string = String(str);
    let res = '';
    for (let i = 0; i < string.length; i++) {
        res += string[i].charCodeAt() + ' ';
    }
    return res.trim();
}

getCodeStringFromText("hello");

//
function guessTheNumber(num) {
    const number = Number(num);

    if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
    if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");

    const random = Math.ceil(Math.random() * 10);
    if (random === number) return "You win!";

    return `You are lose, your number is ${number}, the random number is ${random}`;
}

guessTheNumber(5);




