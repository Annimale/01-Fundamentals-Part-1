

//FIRST CHALLENGE
let markMass = 78;
let johnMass = 95;
let heightMark = 1.69;
let heightJohn = 1.88;

let bmiMark = markMass / (heightMark * heightMark);
let bmiJohn = johnMass / (heightJohn * heightJohn);

console.log('BMI JOHN: ' + bmiJohn + '        ' + 'BMI MARK:' + bmiMark);

let markHigherBMI = bmiMark > bmiJohn;
console.log("Is Mark BMI higher than John's BMI?:  " + markHigherBMI);

//SECOND CHALLENGE

if (bmiMark > bmiJohn) {
    console.log(`Mark que tiene un BMI de ${bmiMark} es mayor que el BMI de John ${bmiJohn}`)
} else {
    console.log(`Mark que tiene un BMI de ${bmiMark} es menor que el BMI de John ${bmiJohn}`)
}

//THIRD CHALLENGE

// Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const DolphinsScoreAvg = (96 + 108 + 89) / 3;
const KoalasScoreAvg = (88 + 91 + 110) / 3;

console.log(`La media de los Dolphins es de: ${(DolphinsScoreAvg)}
La media de los Koalas es de: ${(KoalasScoreAvg)}`)

if (DolphinsScoreAvg > KoalasScoreAvg) {
    console.log(`Los Dolphins han ganado`)

} else if (DolphinsScoreAvg === KoalasScoreAvg) {
    console.log(`EMPATE`)
} else {
    console.log(`Los koalas han ganado`)
}
const DolphinsScoreAvg2 = (97 + 112 + 101) / 3;
const KoalasScoreAvg2 = (109 + 95 + 123) / 3;


console.log(`Resultado de Dolphins: ${DolphinsScoreAvg2}
Resultado de Koalas: ${KoalasScoreAvg2}`)
if ((DolphinsScoreAvg2 >= 100) && DolphinsScoreAvg2 > KoalasScoreAvg2) {
    console.log(`Dolphins tiene un minimo de ${DolphinsScoreAvg2} y ha ganado a Koalas`)
} else if ((KoalasScoreAvg2 >= 100) && KoalasScoreAvg2 > DolphinsScoreAvg2) {
    console.log(`Koalas tiene un minimo de ${KoalasScoreAvg2} y ha ganado a Dolphins`)
} else if ((KoalasScoreAvg2 === DolphinsScoreAvg2) && KoalasScoreAvg2 >= 100 && DolphinsScoreAvg2 >= 100) {
    console.log(`Ambos equipos tienen un minimo de 100 pero han empatado`)
}

const DolphinsScoreAvg3 = (97 + 112 + 50) / 3;
const KoalasScoreAvg3 = (109 + 95) / 3;


console.log(`Resultado de Dolphins: ${DolphinsScoreAvg3}
Resultado de Koalas: ${KoalasScoreAvg3}`)
if ((DolphinsScoreAvg3 >= 100) && DolphinsScoreAvg3 > KoalasScoreAvg3) {
    console.log(`Dolphins tiene un minimo de ${DolphinsScoreAvg3} y ha ganado a Koalas`)
} else if ((KoalasScoreAvg3 >= 100) && KoalasScoreAvg3 > DolphinsScoreAvg3) {
    console.log(`Koalas tiene un minimo de ${KoalasScoreAvg3} y ha ganado a Dolphins`)
} else if ((KoalasScoreAvg3 === DolphinsScoreAvg3) && KoalasScoreAvg3 >= 100 && DolphinsScoreAvg3 >= 100) {
    console.log(`Ambos equipos tienen un minimo de 100 pero han empatado`)
} else {
    console.log('Nobody won the trophy ... bc nobody reached the minimum')
}

//FOURTH CHALLENGE

let bill = 430
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}$, and the tip of that bill is ${tip}$ and the total value is ${tip + bill}$`)
