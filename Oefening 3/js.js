let aantal = parseInt(prompt("Hoeveel getallen?"));
/*vraagt hoeveel getallen je wilt ingeven*/
let getal;
/*het getal dat je hebt ingegeven*/
for(let i = 1; i <= aantal;i++){
    getal = parseInt(prompt(`Geef een getal getal ${i} in:`));
    /*vraagt voor meer getallen tot je het aantal dat je heb ingegeven hebt bereikt*/
    if (getal){
        console.log('het grootste getal van de ' + aantal + ' getallen is ' + getal)
    }

}

