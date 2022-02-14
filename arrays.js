// // create an array
// // length
// // adding/removing elements (to the end/beginning of array)
// // accessing an element (with index)
// // look up splice method

// var popularSports = ["footbal", "golf", "karate"]
// console.log("length:" + popularSports.length);

// var lastItem = popularSports.pop()
// console.log(lastItem)

// var newLengts = popularSports.push("rugby")
// console.log(newLengts)

// var shiftElement = popularSports.shift()
// console.log(shiftElement)

// var newLengthUnshift = popularSports.unshift("tennis")
// console.log(newLengthUnshift)

// var thirdElement = console.log(popularSports[2]); 

// popularSports.splice(1, 2, "cycling", "swimming")
// console.log(popularSports)

var sports = ['footbal', 'tennis', 'rugby', 'snooker', 'handball'];

for(var sport of sports) {
    console.log(sport.toUpperCase());
}
console.log();
for(var i = 0; i < sports.length; i++) {
    console.log(sports[i].toUpperCase());
}







