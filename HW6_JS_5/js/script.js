"use strict";

console.log("Задание 1");

let anyArr = [3, 90, 5, -100, 50, 0, 560, 1];
anyArr.sort((a, b) => a - b);
console.log(anyArr);


console.log("Задание 2");

function checkSpam(text, ...spam) {
    let words = text.split(" ").length;
    let count = 0;
    for (let elem of words) {
        if (spam.includes(elem)) ++count;
    }
    switch (count) {
        case 0:
            return "Спама нет";
        case 1:
            return "Спама почти нет";
        case 2:
            return "Спам есть";
        case 3:
            return "Спама много";
        default:
            return "Спама очень много";
    }
}

console.log("Задание 3");

let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
let newArrow = numsArr.map(elem => {
    return elem.map(elem => elem + 10).filter(elem => elem > 0)
});
console.log(newArrow);