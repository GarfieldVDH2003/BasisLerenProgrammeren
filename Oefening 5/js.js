let getal = parseInt(prompt("voer een getalin"));
/*je vraagt om een getal in te geven*/
let som = 0;
/*de som is het eindresultaat*/
for (let i = getal; i > 0; i = (i - (i % 10)) / 10) {
    som += i % 10
}
/*het llaste getal van i word weggehaald en aan som toegevoegd tot dat i 0 is*/
console.log('het optellen van alle getallen in ' + getal + ' is ' + som);