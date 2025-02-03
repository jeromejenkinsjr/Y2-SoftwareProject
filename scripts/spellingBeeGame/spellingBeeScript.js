let sounds = {}; // This is an object that will hold the loaded sound files, keyed by word.
let playButton, newWordButton; // DOM elements (temporary)
function setup() {
    createCanvas(400, 400);
    currentWord = random(words); // Select a random word from the array using the built-in random function.
    playButton = createButton("Play Sound"); // Create a button to play the sound.
    playButton.position(10, height + 20); // Position the button below the canvas.
    newWordButton = createButton("New Word"); // Create a button to load a new random word.
    newWordButton.position(110, height + 20);
    newWordButton.mousePressed(changeWord);
}