"use strict";

console.log("Задание 1");

let logins = new Map();
    logins.set("Ivan", "Moscow")
    .set("Tom", "Kotka")
    .set("Dima", "Omsk")
    .set("Olya", "Moscow")
    .set("Peter", "Bern");
function getArr(map, city){
    let logins = [];
    for (let pair of map) {
        if (pair[1] === city) logins.push(pair[0]);
    }
    return logins;
}

console.log(getArr(logins, "Moscow"));


console.log("Задание 2");

function getMap(arr){
    let map = new Map();
    for (let elem of arr) {
        if (map.has(elem)) {
            let newVal = map.get(elem) + 1;
            map.set(elem, newVal);
        } else {
            map.set(elem, 1);
        }
    }
    return map;
}
let months =["may", "june", "april", "may", "may", "june"];
console.log(getMap(months));

console.log("Задание 3");

let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function rangeSort(map, from, to) {
    let sortedMap = new Map();
    for (let pair of map.entries()) {
        if (pair[1].age >= from && pair[1].age < to) sortedMap.set(pair[0], pair[1]);
    }
    return sortedMap;
}

console.log(rangeSort(customerMap,1,40));
