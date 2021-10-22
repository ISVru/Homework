"use strict";

console.log("[Задание 1] Дана целочисленная переменная count" +
"количество верных ответов.В зависимости от значения этой переменной вывести в консоль оценку");

let userNum = parseInt(prompt("Введите число"));
if (90 <= userNum <= 100) {
console.log("отлично");
} else if (60 <= userNum <= 89); {
console.log("хорошо");
} else if (40 <= userNum <= 59); {
    console.log("удовлетворительно");
} else {
    console.log("попробуйте еще раз");
}