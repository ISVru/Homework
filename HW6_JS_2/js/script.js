"use strict";

console.log("[Задание 1] Дана целочисленная переменная count" +
    "количество верных ответов.В зависимости от значения этой переменной вывести в консоль оценку");

let userNum = parseInt(prompt("Введите число"));
if (userNum <= 100 && userNum >= 90) {
    console.log("отлично");
} else if (userNum <= 89 && userNum >= 60) {
    console.log("хорошо");
} else if (userNum <= 59 && userNum >= 40) {
    console.log("удовлетворительно");
} else if (userNum <= 39 && userNum >= 0) {
    console.log("попробуйте еще раз");
} else {
    console.log("");

}

console.log("[Задание 2] Задача на switch.В зависимости от введенного оператора нужно вывести в " +
    "консоль результат сложения,вычитания, умножения или деления чисел, которые ввел пользователь");

let firstOper = parseInt(prompt("Введите первый операнд")),
    secondOper = parseInt(prompt("Введите второй операнд")),
    operator = prompt("Введите оператор");
switch (operator) {
    case "+":
        console.log("сложение " + (firstOper + secondOper));
        break;
    case "-":
        console.log("вычитание " + (firstOper - secondOper));
        break;
    case "*":
        console.log("умножение" + firstOper * secondOper);
        break;
    case "/":
        console.log("деление" + firstOper / secondOper);
        break;
    default:
        console.log("Некорректные данные");
}

console.log("[Задание 3] Задача на цикл while." +
    "Получить от пользователя количество тарелок и количество моющего средства");

let cap = parseInt(prompt("Введите количество тарелок")),
    washLiq = parseInt(prompt("Введите количество моющего средства"));
while (cap > 0 && washLiq > 0) {
    cap -= 1;
    washLiq -= .5;
    console.log("Остаток средства" + washLiq);
}
if (cap === 0) {
    console.log("Все тарелки вымыты. Остаток моющего средства" + washLiq);
} else {
    console.log("Моющее средство закончилось. Остаток не вымытых тарелок" + cap);
}


console.log("[Задание 4] Программа загадывает число в диапазоне [1;9] (задать через Math.random)");

let userNumb, programNumb = Math.floor(Math.random() * 9) + 1;
while (userNumb = parseInt(prompt("Введите число от 1 до 9"))) {
    if (userNumb === 0) {
        console.log("выход из программы")

        break;
    } else if (userNumb > programNumb && userNumb <= 9) {
        console.log("загаданное число меньше");
    } else if (userNumb < programNumb && userNumb <= 9) {
        console.log("загаданное число больше");
    } else if (userNumb === programNumb) {
        console.log("Вы угадали число !");
        break;

    } else
        console.log("Введено неверное число.Введите число от 1 до 9");

}