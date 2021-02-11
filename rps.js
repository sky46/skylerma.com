/* Completely fair Rock, Paper, Scissors game for games.html */

let rpsState = 0;
let rpsReset = document.querySelector('#rps-reset')
let rpsResult = document.querySelector('#rps-result')

function result(option, winLose) {
    // Show a result (what the computer picked) and win/loss
    // option should be one of rock, paper or scissors, and winLose should be win or lose
    if (rpsState === 0) {
        rpsResult.innerHTML = `I choose ${option}! You ${winLose}!`;
        rpsReset.style.display = 'inline-block';
        rpsState = 1;
    } else {
        rpsResult.innerHTML = "Click 'Try Again' to play again!"
    }
}

rpsReset.addEventListener('click', function() {
    rpsState = 0;
    rpsResult.innerHTML = '';
    rpsReset.style.display = 'none';
});

let rpsButtons = document.querySelectorAll('.rps-btn');
for (let i = 0; i < rpsButtons.length; i++) {

    rpsButtons[i].addEventListener('click', function() {
        let buttonId = rpsButtons[i].id;

        if (buttonId === 'btn-rock') {
            if (Math.random() < 0.99) {
                result('paper', 'lose')
            } else {
                result('scissors', 'win')
            }
        } else if (buttonId === 'btn-paper') {
            if (Math.random() < 0.99) {
                result('scissors', 'lose')
            } else {
                result('rock', 'win')
            }
        } else {
            if (Math.random() < 0.99) {
                result('rock', 'lose')
            } else {
                result('paper', 'win')
            }
        }
    });
}

