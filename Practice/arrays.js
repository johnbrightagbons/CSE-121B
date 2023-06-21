// Acivity 1
// Using map returns a new array and does NOT modify the original array.
// Array of numbers

const numberArray = ['One', 'Two', 'Three']

// convert the array of strings into an array of HTML strings, where each
// string is turned into a list item (<li>):
const htmlArray = numberArray.map (function (numberArray) {
    return '<li>${numberArray</li>'
});
document.getElementById('myList').innerHTML = htmlArray.join();


// Activity 2
// Using map
// Array of letters
const gradesArray = ['A', 'B', 'A']

// Write a function that will take one letter grade, and return the appropriate gpa points for that grade.
// IE if we send in 'A' it should return 4
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    returnpoints
}
const gpaPoints = gradesArray.map(convertGradeToPoints);
console.log(gpaPoints);

// Activity 3
// reduce is useful when we need to compress an array into a single value. 
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 
// Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
// Using filter keep only the fruits that are longer than 6 characters.
const fruitsArray = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredItems = items.filter(item => item.length < 6);
console.log(filteredItems);

// OR

const filteredFruit = fruitsArray.filter(function (fruitsArray) {
    return fruitsArray.length < 6;   
})


// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);


// Activity 5
// Using indexOf to returns the first index at which a given element 
// can be found in the array, or -1 if it is not present.
const arrayNumber = [12, 34, 21, 54];
const luckNumber = 21;
let luckyInde = arrayNumber.indexOf(luckNumber);