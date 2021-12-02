"use strict";

let articles = [{
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [{
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];
/*
function generateTable(arr){
    // создание table
    for (let key in arr[0]) {
        // в переменной key - названия свойств
        // первый ряд таблицы (заголовки)
    }

    // генерация рядов (один объект - один ряд)
    for (let obj of arr) {
        // создание ряда
        for (let key in obj) {
            // создание ячейки
            // текст ячейки: obj[key]
        }
    }
    // добавить таблицу в html
}

let arr = ["text", "str", "value"];
let str = "text";
str = str.toLowerCase();
// arr.foreach(elem => elem.toLowerCase());

for (let word of arr) {
    if (str === word.toLowerCase()) {
        //
    }
}
*/

function generateTable(arr) {
    let table = document.createElement("table");
    table.classList.add("table");
    let row = table.insertRow();
    for (let key in arr[0]) {
        let cell = row.insertCell();
        cell.innerText = key.toLocaleUpperCase();
    }

    for (let obj of arr) {
        let row = table.insertRow();
        for (let key in obj) {
            let cell = row.insertCell();
            cell.innerText = obj[key];

        }
    }
    document.getElementById("for-table").append(table);
}

generateTable(goods);
generateTable(articles);