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
    }
}
console.log(el);

//Задачи на функции
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

//Методы массивов
function getArray(num) {
    const arr = [];

    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

getArray(10);

//
function doubleArray(arr) {
    return arr.concat(arr);
}

doubleArray([1, 2, 3])

//
function changeCollection() {
    const res = [];

    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            const el = arguments[i].slice();
            el.shift();
            res.push(el)
        }
    }
    return res;
}

console.log(changeCollection([1, 2, 3]))
//
const users = [
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    },
    {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    },
    {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
]

function filterUsers(arr, key, value) {
    if (!Array.isArray(arr)) return new Error('The first argument should be an array');
    if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
    if (value === undefined || value === null) return new Error('The value should be a valid value.');

    const res = [];

    for (l = 0; l < arr.length; l++) {
        if (arr[i][key] === value) {
            res.push(arr[l])
        }
    }
    return res;
}

console.log(filterUsers(users, "age", 36))

//колбэк функции
function firstFunc(arr, fn) {
    let res = 'New value: ';

    for (let i = 0; i < arr.length; i++) {
        res += fn(arr[i]);
    }

    return res.trim();
}

function handler1(el) {
    return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
    return `${el.name} is ${el.age},`
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));
//
function every(arr, fn) {
    if (!Array.isArray(arr)) return new Error('The first argument expected as array');
    if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}
console.log(every([1,2], function (el) {
    return typeof el === 'number';
}))
//


function foo(width, height){
    return width * height;
}
const rectangle = {
    width: 10,
    height: 20,
    getSquare() { return foo(this.width, this.height) }
};

console.log( rectangle.getSquare() );
//
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        const disc = parseFloat(this.discount) * 100
        const skidkaUSD = disc/ (100 * this.price);
        return this.price - skidkaUSD;
    }
}

console.log(price.getPriceWithDiscount());
//
const array = [1, 2, 3, 5, 8, 9, 10];
const newArr = [  ];

for(el of array){
    const isOdd = (el % 2 == 0);
    const obj = {
        digit: el,
        odd: isOdd
    }
    newArr.push(obj);
}
console.log(newArr);
//
function hasNull(array){
    for(element of array){
        if(element === 0){
            return true;
        }
    }
    return false;
}

let result =  hasNull([12, 4, 50, 1,  18, 40]);
console.log(result);
//
function isLongerThan3(array){
    for(el of array){
        if(el.length < 3){
            return false;
        }
    }
    return true;
}

let result = isLongerThan3(['easycode', 'hello', 'what']);
console.log(result);

//Стрелочные функции
const sumer = (...params) => {
    if (!params.length) return 0;
    return params.reduce((prev, next) => prev + next);
}
//
const convertToObject = (num) => ({
    value: num,
    isOdd: Boolean(num % 2)
});

//Переберающие методы массива
const initialValue = [1,2,3,5,8,9,10];
const convertedArray = initialValue.map(num => ({
    value: num,
    odd: Boolean(num % 2)
}));
//
const initialValue = [12, 4, 50, 1, 0, 18, 40];
const zeroExist = initialValue.some(num => num === 0);
//
const initialValue = ['yes', 'hello', 'no', 'easycode', 'what'];
const strLength = initialValue.every(str => str.length >= 3);
//
const initialValue = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

initialValue.sort((prev, next) => prev.info.cores - next.info.cores);

//замыкание
function minus(num1 = 0) {
    return function (num2 = 0) {
        return num1 - num2;
    }
}

console.log(minus(2)(1))
//
function multiplyMaker(num1 = 2) {
    return function (num2 = 1) {
        return num1 *= num2;
    }
}
const multiple = multiplyMaker(2);
console.log(multiple(2))
console.log(multiple(2))

//Работа с DOM
console.log(document.head);

console.log(document.body);

console.log(document.body.children);

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);

const div = document.body.firstElementChild;

const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filteredArticles);
//
function foo(s){
    const arr = s.split(' '); // [ 'Найти' ]
    let maximum = 0;

    for(word of arr){
        const l = word.length;
        if(maximum < l){
            maximum = l;
        }
    }
    return maximum;
}

const str = 'Найти самое-пресамое длинное слово, а точнее его';
const result = foo(str);
console.log(result);















