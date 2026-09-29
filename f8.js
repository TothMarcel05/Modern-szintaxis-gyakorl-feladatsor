statisztika(4, 8, 15, 16, 23, 42)
statisztika(7)

function statisztika(...szamok) {
    let osszeg = 0;
    let db = szamok.length;
    let max = Math.max(...szamok);
    for (const szam of szamok) {
        osszeg += szam;
    }

    return { osszeg, db, max };
}

console.log(`db: ${statisztika(4, 8, 15, 16, 23, 42).db}, osszeg: ${statisztika(4, 8, 15, 16, 23, 42).osszeg}, max: ${statisztika(4, 8, 15, 16, 23, 42).max}`);
console.log(`db: ${statisztika(7).db}, osszeg: ${statisztika(7).osszeg}, max: ${statisztika(7).max}`);