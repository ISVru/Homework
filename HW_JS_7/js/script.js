"use strict";

console.log("Задание 3");

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы' },
    { author: 'Толстой', title: 'Война и мир' },
    { author: 'Лермонтов', title: 'Тамань' },
    { author: 'Гончаров', title: 'Обломов' },
    { author: 'Лермонтов', title: 'Герой Нашего Времени' },
    { author: 'Пушкин', title: 'Руслан и Людмила' },
    { author: 'Лермонтов', title: 'И скучно, и грустно' },
];
let searchAuthor = (num, author) => {
    return num.filter(elem => author === elem.author);
}
console.log(searchAuthor(books, 'Пушкин'));



console.log("Задание 2");

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
let countTo = (obj, title, countToCard) => {
    if (!typeof(title) === "string" || isNaN(countToCard) || !typeof(obj) === "object") return false;
    for (let elem in obj) {
        if (obj[elem].title === title && obj[elem].count >= countToCard) {
            obj[elem].count -= countToCard;
            return true;
        } else {
            console.log(`count меньше чем ${countToCard}`);
            return false;
        }
    }
}
console.log(countTo(goods, "Пианино", 10));

console.log("Задание 1");

let getPrice = (obj, from, to) => {
    if (isNaN(from) || isNaN(to) || !typeof(obj) === "object") return false;
    let objNew = {};
    for (let elem in obj) {
        if (obj[elem].price >= from && obj[elem].price < to) objNew[elem] = obj[elem];
    }
    return objNew;
}
console.log(getPrice(goods, 1000, 3000));