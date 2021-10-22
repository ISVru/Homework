"use strict";

console.log("[Задание 1] Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь." +
    "Решение : " +
    "Задаем параметры (Высота =7(a)),(Длина =9(b)),(Ширина =5(c))" +
    "Формула площади  S п.п. = 2(ab + ac + bc)");
let height = 7, length = 9, width = 5;//вводные данные
let square = 2 * (height*length + length*width + height*width);//формула (условие)
console.log("площадь = " + square);// итог (вывод)

console.log("[Задание 2] В переменной n хранится двузначное число. Найти сумму цифр числа n и вывести результат в консоль.");

const Num = 77, firstNum = Num % 10, secondNum = (Num - firstNum) / 10; // вводные
const sum = firstNum + secondNum; // условие
console.log("сумма = " + sum); // вывод

console.log("[Задание 3] Поменять значение двух переменных, не используя третью (использовать арифметические операторы)" +
    "let a = 7; let b = 3; // код console.log(a, b); // 3 7");

let firstNumb = 7, secondNumb = 3, total = secondNumb + firstNumb; // вводные
firstNumb = total - firstNumb; // условие
secondNumb = total - firstNumb; // условие
console.log("меняем значение " + firstNumb,secondNumb); //вывод







