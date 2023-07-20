/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInformation = {
    name: "John Bright Agbons",
    age: 35,
    location: "Benin City, Edo State, Nigeria",
    occupation: "Student, BYU-Idaho",
    photo: "images/myself.jpg",
    favoriteFoods: ["Beans", "Vegetable and Yam", "Noodles"],
    hobbies: ["Football", "Reading", "Travelling", "Gardening"],
    placesLived: [
        {
            place: "",
            length: ""
        }
    ]
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInformation.name = "John Bright Agbons";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInformation.photo = "images/myself.jpg";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInformation.favoriteFoods = ["Beans", "Vegetable and Yam", "Noodles"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInformation.hobbies = ["Football", "Reading", "Travelling", "Gardening"];

// Step 6: Add another property named placesLived with a value of an empty array
myInformation.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInformation.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
myInformation.placesLived[0].place = "Edo";
myInformation.placesLived[0].length ="10 Years";

// Add another object to placesLived
myInformation.placesLived.push({ place: "", length: "" });
myInformation.placesLived[1].place = "Delta";
myInformation.placesLived[1].length = "5 Years";



/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let nameElement = document.getElementById('name');
nameElement.innerHTML = myInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let photoElement = document.getElementById("photo");
photoElement.src = myInformation.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photoElement.alt = myInformation.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoodsElement = document.getElementById("favorite-foods");
myInformation.favoriteFoods.forEach(function(food) {
    let li = document.createElement("li");
    li.textContent = food;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
favoriteFoodsElement.appendChild(li);
});


// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesElement = document.getElementById("hobbies");
myInformation.hobbies.forEach(function(hobby) {
    let li = document.createElement("li");
    li.textContent = hobby;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbiesElement.appendChild(li);
});


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
let placesLivedElement = document.getElementById("places-lived");
myInformation.placesLived.forEach(function(place) {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

// - Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement("dd");
    dd.textContent = place.length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
placesLivedElement.appendChild(dt);
placesLivedElement.appendChild(dd);
});
