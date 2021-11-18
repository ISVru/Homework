"use strict";

let animals = [{
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": { "vaccinations": true, "passport": true }
    },
    {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": { "vaccinations": false, "passport": false }
    },
    {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "additional_info": { "vaccinations": false, "passport": true }
    },
    {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": { "vaccinations": true, "passport": true }
    }
];

let animalsSection = document.querySelector(".animals-section");

function addAnimals(animalsArr, element) {
    for (let animal of animalsArr) {
        let cardAnimal = document.createElement("div");
        cardAnimal.classList.add("card-animal");

        let nameAnimal = document.createElement("h2");
        nameAnimal.innerText = `${animal.name}`;

        let ageAnimal = document.createElement("span");
        ageAnimal.classList.add("age-animal");

        let colorAnimal = document.createElement("span");
        colorAnimal.innerText = `${animal.color}`;

        let addInfo = document.createElement("div");
        addInfo.classList.add("additional-info");

        let vaccineInfo = document.createElement("span");
        Object.values(obj).forEach((prop) => {
            if (prop.vaccinations === true) vaccineInfo.innerText = "есть";
            else vaccineInfo.innerText = "нет";
        });

        let passInfo = document.createElement("span");
        Object.values(obj).forEach((prop) => {
            if (prop.passport === true) passInfo.innerText = "есть";
            else passInfo.innerText = "нет";
        });

        addInfo.append(vaccineInfo, passInfo);
        card.append(animal.name, animal.color, addInfo);
        animalsSection.append(cardAnimal);
    }

    document.body.append(animalsSection);
}