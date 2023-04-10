// The unordered list where the player’s guessed letters will appear
const letters = document.querySelector(".guessed-letters");
// The button with the text “Guess!” in it
const guessButton = document.querySelector(".guess");
// The text input where the player will guess a letter
const guessLetter = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear
const wordProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display
const span = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter
const messages = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again
const hiddenButton = document.querySelector(".play-again hide");
const word = "magnolia";

// console.log(word);

// Display symbole as placeholder for the letters
const updateWIP = function (word) {
    const updateWIPLetters = [];
    for (const letter of word) {
        console.log(letter);
        updateWIPLetters.push("●");
    }
    wordProgress.innerText = updateWIPLetters.join("");
}

updateWIP(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = guessLetter.value;
    console.log(guess);
    letterInput.value = "";
});