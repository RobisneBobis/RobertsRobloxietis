let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const resultElement = document.getElementById("result");
    attempts++;

    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "Too low! Try again.";
    } else {
        resultElement.textContent = "Too high! Try again.";
    }
}

