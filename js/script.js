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
const foot = string[string.length -1];
console.log(foo);
console.log(foot);
// с этим кодом нужно разобраться еще раз
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
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