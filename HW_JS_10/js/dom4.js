"use strict";

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n) {
    if (n < 3) {
                return;
    }
    let priseCells = [];
    for (let i = 0; i < 3; ) {
        let random = Math.floor(Math.random() * n * n);
        if (priseCells.includes(random)) continue;
        priseCells.push(random);
        i++;
    }
    console.log(priseCells);
    let field = document.getElementById("field");
    field.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let prisesArr = Object.keys(prises);
    let p = 0;
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        field.append(cell);
        if (priseCells.includes(i)) cell.setAttribute("prise", prisesArr[p++]);
    }
}
function fieldCheck({target}) {
    if (prisesArr.includes(target.getAttribute("prise"))) {
        message.innerText = `Игра закончена. Вы выиграли ${prises[target.getAttribute("prise")]}`;
        this.removeEventListener("click", fieldCheck);
    } else if (--attempts === 0){
        message.innerText = `Игра закончена. Попыток больше нет`;
        this.removeEventListener("click", fieldCheck);
    } else {
        message.innerText = `Вы можете попробовать еще раз. Количество попыток осталось: ${attempts}`;
    }
}
let prisesArr = Object.keys(prises);
let attempts = 3;

generateField(4);

document.getElementById("field").addEventListener("click", fieldCheck);