 "use strict";

console.log("Задание 1");

function productName(count) {
    if (count % 10 === 1 && count !== 11) return `${count} товар`;
    if ((count % 10 === 2 && count % 100 !== 12) ||
        (count % 10 === 3 && count % 100 !== 13) ||
        (count % 10 === 4 && count % 100 !== 14)) return `${count} товара`;
    return `${count} товаров`;
}

let nums = parseInt(prompt("Введите количество товаров."))
console.log(productName(nums));

console.log("Задание 2");


let a = 1,
    b = 100,
    c = parseInt(prompt("Введите шаг массива"));

function range(a, b, c = 1) {
    let arr = [];
    for (let count = a; count < b; count += c) {
        arr.push(count);
    }
    return arr;
}
console.log(range(a, b, c));