"use strict";

console.log("[Задание 1] Дана целочисленная переменная count" +
"количество верных ответов.В зависимости от значения этой переменной вывести в консоль оценку");

let userNum = parseInt(prompt("Введите число"));
if ( userNum <= 100 && userNum >= 90) {
console.log("отлично");
} else if ( userNum <= 89 && userNum >= 60); {
console.log("хорошо");
} else if ( userNum <= 59 && userNum >= 40);{
    console.log("удовлетворительно");
} else if ( userNum <= 39 && userNum >= 0); {
    console.log("попробуйте еще раз");
} else{
    console.log("")

}