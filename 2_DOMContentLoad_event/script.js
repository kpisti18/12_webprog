// Városok listája
const cities = [
    { name: "Berlin", value: "berlin"},
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];

const select = document.querySelector('#city');

window.addEventListener('DOMContentLoaded', betolt);

function betolt() {
    cities.forEach(city => {
        //console.table(city);
        // <option> </option> tag létrehozása
        const option = document.createElement('option');
        
        // <option value="váron_neve"> </option> létrehozása
        option.value = city.value;

        // <option value="váron_neve">Város_neve</option> létrehozása
        option.textContent = city.name;

        // állítsuk be, hogy a Professzor legyen a default értéke a select-nek
        if (city.name === 'Professzor') {
            option.selected = true;
        }

        // belepakoljuk az elkészített option tag-eket a select változóba
        select.append(option);
    });
}

// Házi - megoldani a képcserés funkciót