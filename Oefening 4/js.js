let graden = parseInt(prompt('Heef het aantal graden in'))

switch (true){
    case(graden>=26&&graden<=100):
        warmte="te warm"
        break;
    case(graden>=25&&graden<=15):
        warmte="aangenaam"
        break;
    case(graden>=15&&graden<=0):
        warmte="frisjes"
        break;
}
console.log("het is" + warmte)