const tarolo = document.querySelector('.tarolo');
const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');

const uzik = []; // ebbe a tömbbe töltjük fel a fetch után az üziket
let zarvaVanE = true; // kupak alapból zárva 

// uzik.csv beolvasása
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./uzik.csv');
        //console.log(response);
        const text = await response.text();
        //console.log(text);
        const sorok = text
            .split('\n')
            .map(sor => sor.trim())
            .filter(sor => sor !== '')
        //console.log(sorok);

        sorok.forEach(sor => uzik.push(sor));
        console.log(uzik);  

    } catch (error) {
        console.log(error);
    }
});

// kattintás a kupakra / tárolóra
tarolo.addEventListener('click', () => {
    // ha zárva van, akkor nyissuk ki
    if (zarvaVanE) {
        szoveg.textContent = '';
        tarolo.classList.remove('zar');
        tarolo.classList.add('nyit');
        zarvaVanE = false;

        setTimeout(() => {
            if (!zarvaVanE && uzik.length > 0) {
                szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
            }
        }, 300); // ugyannyi, mint az animation-duration ideje
    } else {
        szoveg.textContent = '';
        tarolo.classList.remove('nyit');
        tarolo.classList.add('zar');
        zarvaVanE = true;
    }
});