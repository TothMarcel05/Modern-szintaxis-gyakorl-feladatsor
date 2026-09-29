const helyezettek = ['Anna', 'Béla', 'Csilla', 'Dávid', 'Emese'];

const [arany, ezust, ...tobbiek] = helyezettek;

console.log(`Arany: ${arany}, ezüst: ${ezust}, további helyezettek: ${tobbiek.join(', ')}`)