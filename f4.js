cimke({ nev: 'Egér', ar: 6990, keszlet: 12 });
cimke({ nev: 'Monitor', ar: 54990 });

function cimke(termek) {
    const {nev, ar} = termek
    console.log(`${nev} – ${ar} Ft`);
}
