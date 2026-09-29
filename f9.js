const nev = 'Egér';
const ar = 6990;
const mezo = 'szin';
const ertek = 'fekete';

const termek = {nev: mezo, ar, nev, ertek: ertek}; 

function leiras(termek) {
    return `${termek.nev} (${termek.ertek}) - ${termek.ar} Ft`
}

console.log(leiras(termek));