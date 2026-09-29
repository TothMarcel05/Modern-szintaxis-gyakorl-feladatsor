const rendelesek = [
{ id: 1, vevo: { nev: 'Anna', cim: { varos: 'Győr' } }, kedvezmeny: 0 },
{ id: 2, vevo: { nev: 'Béla' }, kedvezmeny: 15 },
{ id: 3, kedvezmeny: null },
{ id: 4, vevo: { cim: { varos: 'Pécs' } } }
];

for (const rendeles of rendelesek) 
{
    console.log(`#${rendeles.id} - ${rendeles.vevo?.nev || "ismeretlen vevő"} - ${rendeles.vevo?.cim?.varos || "nincs cím"} - kedvezmény: ${rendeles.kedvezmeny || 5}%`);
}