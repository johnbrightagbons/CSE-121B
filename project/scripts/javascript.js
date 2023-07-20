// Define the sentence components
var subjects, verbs, objects;
subjects = ["The Boy", "A Girl", "John", "The Teacher", "My Bishop", "The President", "A Cat", "The Dog"];
verbs = ["claps", "loves", "kicks", "kills", "weeps", "sings", "runs", "dances","plays"];
objects = ["hands", "snake", "rice", "cucumber", "football", "him", "river", "tennis"];




// Generate a random sentence
function generateRandomSentence() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    
    return `${randomSubject} ${randomVerb} ${randomObject} `;
}

// Display the random sentence
function displayRandomSentence() {
    const sentenceElement = document.getElementById("sentenceDisplay");
    sentenceElement.textContent = generateRandomSentence();
}

// Get the refresh button element
const refreshButton = document.getElementById("refresh");

// Attach a click event listener to the refresh button
refreshButton.addEventListener("click", displayRandomSentence);

// Initial display of a random sentence
displayRandomSentence();
