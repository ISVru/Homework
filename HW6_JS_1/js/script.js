"use strict";

console.log("[Задание 1] Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь." +
    "Решение : " +
    "Задаем параметры (Высота =7),(Длина =9),(Ширина =5)" +
    "Формула площади  S п.п. = 2(ab + ac + bc)");
let height = 7; // Высота a
let length = 9; // Длина b
let width = 5; // Ширина c
let square = 2 * (height*length + length*width + height*width); // Площадь пп
console.log("площадь = " + square);

console.log("[Задание 2] В переменной n хранится двузначное число. Найти сумму цифр числа n и вывести результат в консоль.");

const Num = 77;
const firstNum = Num % 10;
const secondNum = (Num - firstNum) / 10;
const sum = firstNum + secondNum;

console.log("сумма = " + sum);

console.log("[Задание 3] Поменять значение двух переменных, не используя третью (использовать арифметические операторы)" +
    "let a = 7; let b = 3; // код console.log(a, b); // 3 7");

let firstNumb = 7;
let secondNumb = 3;
let total = secondNumb + firstNumb;
firstNumb = total - firstNumb;
secondNumb = total - firstNumb;

console.log("меняем значение " + firstNumb,secondNumb);







