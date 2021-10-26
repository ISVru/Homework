"use script";

console.log("Задание 1");

let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
let sumElem = 0;
let countElem = 0;
for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums[a].length; b++) {
        nums[a][b] += 10;
        sumElem += nums[a][b];
    }
    countElem += nums[a].length;
    arithElem = sumElem / countElem
}
console.log("среднее арифметическое значений элементов массива = " + arithElem);
//--------------------
console.log("Задание 2");

let array2 = [7, 120, 198, 86, 246, 99, 29];
let maxElem = array2[0],
    minElem = array2[0];
let maxIndex = 0,
    minIndex = 0;
for (let a = 0; a < array2.length; a++) {
    if (maxElem < array2[a + 1]) {
        maxElem = array2[a + 1];
        maxIndex = a + 1;
    }
    if (minElem > array2[a + 1]) {
        minElem = array2[a + 1];
        minIndex = a + 1;
    }

}
array2[maxIndex] = minElem;
array2[minIndex] = maxElem;

console.log("новый массив" + array2)
    //---------------------------
console.log("Задание 3");

let array3 = [-7, 120, -198, -86, 246, 99, 29];
let newArray = [];
for (let a = array3.length - 1; a >= 0; a--) {
    if (array3[a] < 0) {
        newArray.push(array3[a]);
        array3.splice(a, 1)
    }

}
console.log("новый массив" + newArray);

//---------------------------
console.log("Задание 4");

let info = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userName = prompt("Введите имя пользователя");
while (!info.includes(userName)) {
    userName = prompt("Это имя не подходит.Пожалуйста введите другое");
}
//-------------------
console.log("Задание 5");

let info1 = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userName1 = prompt("Введите имя пользователя");
while (info1.includes(userName1)) {
    userName1 = prompt("Это имя уже занято.Пожалуйста введите другое");
}
info1.push(userName1);
console.log("имена пользователей + новое имя " + info1);