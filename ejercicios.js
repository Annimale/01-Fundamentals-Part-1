const country = 'Spain';
const continent = 'Europe';
let population = 800200000;

let isIsland = false;
let language = 'spanish';

console.log(isIsland, language)



population /= 4;
console.log(population);

// country = 'Germany';
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(country > finlandPopulation);

let avgCountryPopu = 33000000;
console.log(avgCountryPopu > country);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';



if (population > 33000000) {
    console.log(`Portugal tiene menos poblacion que España`)
} else {
    console.log(`Portugal tiene mas poblacion que españa`)
}




//Type conversion and coercion
console.log('9' - '5');// 4 BIEN
console.log('19' - '13' + '17');//617 BIEN
console.log('19' - '13' + 17); // 6+17 BIEN
console.log('123' < 57); //undefined MAL, ha dado false ya que 57 es menos que 123
console.log(5 + 6 + '4' + 9 - 4 - 2);//117 MAL, porque es 114 concatenado 3


//Equality Operators == vs ===
let numNeighbours;//= prompt('How many neighbour countries does your country have ?')
if (numNeighbours === 1) {//Si le pongo el strict me salta al >=1 porque es igual a 1 pero si lo sustituyo por > no me lo detecta, ya que al poner el strict ha de ser un number no string 
    console.log('Only 1 border')
} else if (numNeighbours >= 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders, numNeighbours  is 0 or other value')
}


//Logical Operators
if ((population < 50000000) && (language === 'English') && (isIsland === false)) {
    console.log(`UK Maybe its your country, idk Sarah`)
} else {
    console.log(`There's no country like this Sarah, I'm sorry !`)
}


//The switch statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST Number of native speakers !');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    case '5th most spoken language':
        console.log('5th place');
        break;
    default:
        console.log('Great language too :D ');
        break;


}

population > 33000000 ? console.log('Portugals population is above average') : console.log(`Portugal's population is below average`);
console.log(`Portugal's population is ${population > 33000000 ? 'above' : 'below'} average`)




