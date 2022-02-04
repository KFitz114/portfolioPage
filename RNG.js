let guess = document.getElementById("guess");
let submit = document.getElementById("submit");
let answer = Math.floor(Math.random() * 100)
let response = document.getElementById("response");
let attempts = document.getElementById("attempts");
let score = document.getElementById("score");
let reset = document.getElementById("reset");
document.getElementById('guess').value=null;
var tries = 0;
var correct = 0;
console.log("Answer is:", answer);
response.innerText = "Awaiting guess.";
score.innerText = "Your Score: ";
attempts.innerText = "Your attempts: ";
submit.addEventListener("click", function() {
    console.log("guess: ", guess.value);
    if(guess.value > answer) {
        tries++;
        response.innerText = "The number is less than your guess.";
        score.innerText = "Your score: " + correct;
        attempts.innerHTML ="Your attempts: " + tries;

    }
    if (guess.value < answer) {
        tries++;
        response.innerText = "The number is greater than your guess";
        score.innerText = "Your score: " + correct;
        attempts.innerText = "Your attempts: " + tries;
    }
    if (guess.value == answer) {
        correct++;
        tries++;
        response.innerText = "You guessed correctly";
        score.innerText = "Your score: " + correct;
        attempts.innerText = "Your attempts: " + tries;
    }
});
submit.addEventListener("click", function() {
    document.getElementById('guess').value=' ';
})