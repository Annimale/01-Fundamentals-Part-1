// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);


// console.log('Jonas');
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);



// console.log(country, continent, population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun)
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'Es fun'
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;
/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means to 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Torres';
console.log(firstName + ' ' + lastName);


//Assignment operators
let x = 10 + 5;//15
x += 10;//x = x + 10 = 25
x *= 4;// x = x * 4 =100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x)

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = (ageSarah >= 18)

console.log(now - 1991 > now - 2018)
*/

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018)

// console.log(25 - 10 - 5)

// let x, y;
// x = y = 25 - 10 - 5;// x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(averageAge)


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = '1991';
// const year = 2037


// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' ' + job;
// console.log(jonas);

// const jonasNew = `I'm  ${firstName}, a ${year - birthYear} years old  ${job} `;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');


// console.log(`String with
// multiple
// lines`)


// const age = 1;


// if (age >= 18) {
//     console.log('You can drive in Europe')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(` ${yearsLeft} Years left by Sarah to drive a car in Europe 😪 `)
// }
// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)


// //Type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //NaN = Not A Number (invalid number)
// console.log

// console.log(String(23), 23);
// console.log(String('Jonas'));

// //Type coercion
// console.log('I am ' + 23 + ' years old ')// The number will be converted to a String
// console.log('I am ' + '23' + ' years old ')
// console.log('23' - '10' - 3);// El menos - convierte los string a number, minetras que + a String
// console.log(('23' * '2') / '2');// Lo mismo para multiplicar o dividir

// let n = '1' + 1;//11
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + '5');// 95
// console.log('10' - '4' - '3' - 2 + '5');//15

// //6 Falsy values= 0, '', undefined,null, NaN, False.

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {//JS Convierte lo que haya en boolean en la condicion, entyonces como es cero es false
//     console.log('Dont spend it all ;)')
// } else {
//     console.log('You should get a job!');
// }

// let height;// Puesto que es undefined es false
// if (height) {
//     console.log('Height is defined')
// } else {
//     console.log('Height its undefined')
// }

// let heightcero = 0;// Puesto que es 0 es false, pero en este caso es un bugggg
// if (height) {
//     console.log('Height is defined')
// } else {
//     console.log('Height its undefined')
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult :DD STRICT')//Strict operator

// if (age == 18) console.log('You just became an adult :DD LOOSE WE SHOULD AVOID IT')//Loose operator

// const favourite = Number(prompt('What is your favourite number?'));
// console.log(favourite)
// console.log(typeof favourite)


// if (favourite === 23) {//'23' == 23 asi seria solo con dos ==
//     console.log('Cool! 23 is an amazing number')
// } else if (favourite === 7) {
//     console.log('7 is guay')
// } else if (favourite === 9) {
//     console.log('9 is guay')
// } else {
//     console.log('Number is not 23 or 7')
// }

// if (favourite !== 23) {
//     console.log('Why not 23 bro?')
// }


// const day = 'thursday';

// switch (day) {
//     case 'monday': //day ==='monday'
//         //Aqui puedes meter todo el codigo que quieras
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples')
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;

//     default:
//         console.log('Not a valid day !')


// }


// const dia = 'sunda3y';

// if (dia === 'monday') {
//     console.log('A');
// } else if (dia === 'tuesday') {
//     console.log('B');
// } else if (dia === 'wednesday' || dia === 'thursday') {
//     console.log('C');
// } else if (dia == 'friday') {
//     console.log('D');
// } else if (dia === 'saturday' || dia === 'sunday') {
//     console.log('E')
// } else {
//     console.log('F')
// }

const age = 23;
age >= 18 ? console.log('I like to drink wine 🥃') : console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'watta';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'winah 🍷🍷';
} else {
    drink2 = 'wattah 💧💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)