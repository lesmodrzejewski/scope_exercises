// var, let, const


// LEXICAL SCOPE block scope

// var fname = 'Leszek'

// FUNCTION SCOPE  only visible inside the function

// var sectetsFunction = function () {
//     var pinCode = [0, 0, 0, 0]
//     console.log('pincode inside function:', pinCode);
// }

// sectetsFunction();


// console.log('pincode outside function:', pinCode);

// var sectetsFunction = function () {
//     var pinCode = [0, 0, 0, 0]
//     console.log('pincode inside function:', fname);
// }

// sectetsFunction();
// console.log('pincode outside function:', fname);

// sectetsFunction();




// var filterNameByFirstLetter = function (names, letter) {
//     var filteredNames = []
//     for (var name of names) {
//         if (name[0 ])
//     }
// }

// var isItFive = function (number) {

//     let result;

//     if (number === 5) {
//         result = true
//     } else {
//         result = false
//     }
//     return result;
// }

// isItFive(2)

const calculateEnergy = function (mass) {
    const speedOfLight = 299792458
    return mass*speedOfLight ** 2;
}

const energyOfMe = calculateEnergy(87)
console.log(energyOfMe)