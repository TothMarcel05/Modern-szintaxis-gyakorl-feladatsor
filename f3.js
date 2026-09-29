const termek = { nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' };

const {ar: egysegar, garancia = 12} = termek;

console.log(`${termek.nev} – egységár: ${egysegar} Ft, garancia: ${garancia} hónap`)
