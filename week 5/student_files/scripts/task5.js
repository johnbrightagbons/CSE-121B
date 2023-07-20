// Step 1: Declare and initialize a new variable to hold the current date
var currentDate = new Date();
var currentDay = currentDate.getDay();

// Step 2: Declare another variable to hold the day of the week
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week (hint: getDay())
var dayName = dayOfWeek[currentDay];

// Step 4: Declare a variable to hold a message that will be displayed
var message = "Hello! You are Welcome to our world";

// Step 5: Using an if statement, if the day of the week is a weekday (i.e., Monday - Friday), set the message variable to the string 'Hang in there!'
if (currentDay >= 1 && currentDay <= 5) {
    message = "Hang in there!";
} else {
    // Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
    message = "Woohoo! It is the weekend!";
}

// Step 7: Assign the value of the first message variable to the HTML element with an ID of message1
var messageElement1 = document.getElementById('message1');
messageElement1.textContent = message;

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var secondMessage = "Let vibes every day except weekends";

// Step 2: Use switch, case, and break to set the message variable to the day of the week as a string (e.g., Sunday, Monday, etc.) using the day of the week variable declared in Step 2 above
switch (currentDay) {
    case 0:
        secondMessage = 'Sunday';
        break;
    case 1:
        secondMessage = 'Monday';
        break;
    case 2:
        secondMessage = 'Tuesday';
        break;
    case 3:
        secondMessage = 'Wednesday';
        break;
    case 4:
        secondMessage = 'Thursday';
        break;
    case 5:
        secondMessage = 'Friday';
        break;
    case 6:
        secondMessage = 'Saturday';
        break;
    default:
        secondMessage = 'Unknown';
}

// Step 8: Assign the value of the second message variable to the HTML element with an ID of message2
var messageElement2 = document.getElementById('message2');
messageElement2.textContent = secondMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
var templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(templeList) {
    templeList.forEach((temple) => {
        // - Creates an HTML <article> element
        const articleElement = document.createElement('article');
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        // - Creates an HTML <h4> element and add the temple's location property to it
        const h4LocationElement = document.createElement('h4');
        h4LocationElement.textContent = temple.location;
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        const h4DedicatedElement = document.createElement('h4');
        h4DedicatedElement.textContent = temple.dedicated;
        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.templeName;

        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(h4LocationElement);
        articleElement.appendChild(h4DedicatedElement);
        articleElement.appendChild(imgElement);

        // - Appends the <article> element to the HTML element with an ID of temples
        const templesElement = document.getElementById('temples');
        templesElement.appendChild(articleElement);
    });
}

async function getTemples() {
    // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

    // Step 5: Convert your fetch response into a JavaScript object (hint: .json()). Store this in the templeList variable you declared earlier (Step 1). Make sure the execution of the code waits here as well until it finishes.
    templeList = await response.json();

    // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(templeList);
}

getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    const templesElement = document.getElementById('temples');
    templesElement.innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    const selectedValue = document.getElementById('sortBy').value;
    templeList.sort((a, b) => {
        if (a[selectedValue] < b[selectedValue]) {
            return -1;
        }
        if (a[selectedValue] > b[selectedValue]) {
            return 1;
        }
        return 0;
    });

    // - Calls the output function passing in the sorted list of temples
    output(templeList);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
