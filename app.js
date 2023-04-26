let userScore = 0;
let botScore = 0;
const userScoreEl = document.getElementById("user-score");
const botScoreEl = document.getElementById("bot-score");
const scoreBox = document.querySelector(".score-box");
const resultParagraph = document.querySelector(".result > p");
const rockEl = document.getElementById("r");
const paperEl = document.getElementById("p");
const scissorsEl = document.getElementById("s");

const timeOut = 500;

function getBotChoice() {
    const choices = ["r", "s", "p"];
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    let output
    switch (letter) {
        case "r":
            output = "Rock"
            break;
        case "s":
            output = "Scissors"
            break;
        case "p":
            output = "Paper"
            break;
    }
    return output
}

function win(userChoice, botChoice) {
    const userChoiceEl = document.getElementById(userChoice);
    userScore++;
    userScoreEl.innerHTML = userScore;

    resultParagraph.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(botChoice)}. You WIN!`;
    userChoiceEl.classList.add("green-glow");
    setTimeout(() => {
        userChoiceEl.classList.remove("green-glow");
    }, timeOut);
}

function lose(userChoice, botChoice) {
    const userChoiceEl = document.getElementById(userChoice);
    botScore++;
    botScoreEl.innerHTML = botScore;

    resultParagraph.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(botChoice)}. You LOSE!`;
    userChoiceEl.classList.add("red-glow");
    setTimeout(() => {
        userChoiceEl.classList.remove("red-glow");
    }, timeOut);
}

function draw(userChoice, botChoice) {
    const userChoiceEl = document.getElementById(userChoice);

    resultParagraph.innerHTML = "It's DRAW";
    userChoiceEl.classList.add("gray-glow");
    setTimeout(() => {
        userChoiceEl.classList.remove("gray-glow");
    }, timeOut);
}

function game(userChoice) {
    // console.log('✅' + userChoice);
    const botChoice = getBotChoice();
    switch (userChoice + botChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, botChoice);
                // console.log("win");
                break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, botChoice);
                // console.log("lose");
                break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, botChoice);
                // console.log("draw");
                break;
    }

    // console.log("user ..." + userChoice);
    // console.log("bot  ..." + botChoice);

}


function main() {
    rockEl.addEventListener('click', () => game("r"));
    paperEl.addEventListener('click', () => game("p"));
    scissorsEl.addEventListener('click', () => game("s"));
}

main();

// console.log(getBotMove);





// console.log("6-ordibehesht-402");