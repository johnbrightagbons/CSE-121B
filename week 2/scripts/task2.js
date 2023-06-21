/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let Myname = "JOHN BRIGHT AGBONS";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = Myname;

// Step 3: declare and instantiate a variable to hold the current year
const newdate = new Date();
const currentYear = newdate.getFullYear();
document.querySelector('#year').innerHTML = currentYear

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;


// Step 5: declare and instantiate a variable to hold the name of your picture
let pictureName = "images/Temple.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute()
document.querySelector('img').setAttribute('src', pictureName);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favouriteFoods = ["Rice", "Plantain", "Noodles"]; 

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favouriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let favouriteFood1 = "Beans";

// Step 4: add the variable holding another favorite food to the favorite food array
favouriteFoods.push(favouriteFood1);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favouriteFoods;

// Step 6: remove the first element in the favorite foods array
favouriteFoods.shift();
console.log(favouriteFoods);

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favouriteFoods;

// Step 8: remove the last element in the favorite foods array
favouriteFoods.pop();
console.log(favouriteFoods);

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favouriteFoods;