// Scope Homework: Who Dunnit

// Learning Objectives

// - Understand function scope
// - Know the difference in between the let and const keywords

// Brief

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// MVP

// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);


// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   // TypeError: Assignment to constant variable.
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // prediction: "The murderer is Professor Plum" WRONG the correct answer is TypeError: Assignment to constant variable.
// const variable can't be reassigned. changeMirderer function tries to do that. That's why we get the error.


// // Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// prediction: 
// First Verdict: "The murderer is Mrs. Peacock" CORRECT
// Second Verdict: "The murderer is Professor Plum" CORRECT
// firstVerdict variable is assigned to the declareMurder function. The function creates a new variable murderer and assignes "Mrs Peacock" to it.
// secondVerdict variable uses the global murderer variable.


// // Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// // prediction:

// // "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard". CORRECT
//  The declateAllSuspects function which is assigned to the suspects variable uses
// two global variables and changes the third variable and uses it.

// // "Suspect three is Mrs. Peacock" CORRECT 
// Second console log uses the global variable



// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// // prediction:
// // "The weapon is the Revolver" CORRECT. 
// The changeWeapon function changes the value of the weapon key to Revolver. 
// It changes the value before the declareWeapon function gets called.



// // Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // prediction:
// // "The murderer is Colonel Mustard" WRONG the correct answer is Mrs. White
// I get it now. The outcome is Mrs. White because there is no let declaration in front of the murderer variables in line 130 and 133.
// The function changeMurderer changes the global variable twice. The last time it changes the variable to be Mrs.White. That's why
// the right answer is Mrs. White.


// // Episode 7


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // prediction:
// // "The murderer is Miss Scarlet" WRONG the correct answer is Mr.Green
// The outcome is Mr Green because changeMurderer function changes the global variable to Mr.Green. In line 165 the unexpectedOutcome function changes the variable
// in the line 162 not the global one. The declareMurderer function uses the global variable.


// Episode 8


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// prediction:
// "The weapon is Candle Stick" CORRECT The outcome is Candle Stick because the argument of the plotTwist function is equal the value of the room key.
// The function changes the value of the murderer key. And the argument of the unexpectedOutcome function is equal to the murderer key value.
// That changes the value of the weapon key to Candle Stick.


// Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// // prediction:
// // "The murderer is Professor Plum" CORRECT
// The if statement produces new murderer variable. It doesn't change to global variable. The declateMurderer function uses the global variable.

// Extensions

// Make up your own episode!
