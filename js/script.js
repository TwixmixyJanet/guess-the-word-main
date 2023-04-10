// The unordered list where the player’s guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// The button with the text “Guess!” in it
const guessLetterButton = document.querySelector(".guess");
// The text input where the player will guess a letter
const letterInput = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// console.log(word);

// Display symbole as placeholder for the letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // empty message element
    message.innerText = "";
    // grabbing what was entered in the input
    const guess = letterInput.value;
    // make sure that it is a single letter
    const goodGuess = validateInput(guess);
    // console.log(goodGuess);

    if (goodGuess) {
        makeGuess(guess);
    }

    letterInput.value = "";
});

const validateInput = function (input) {
    // this is to make sure the player inputs a letter and no other special characters
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did you type a number or special character?
        message.innerText = "Please enter a letter from the alphabet."
    } else {
        // We finally got a single letter, yay!
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};

