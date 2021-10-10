// declare first player object
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

// declare second player object
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// select reset button
const resetButton = document.querySelector('#reset');

// chose winning score
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

// function
function updateScores(player, opponent) {
    // check if game is over
    if (!isGameOver) {
        // increase score
        player.score += 1;

        // if reaches winning score
        if (player.score === winningScore) {
            // end game
            isGameOver = true;

            // change color
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            // disable two buttons
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// player 1 button
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
});

// player two button
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});

// in event of change of winning score
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// event of reset
resetButton.addEventListener('click', reset)

// reset function
function reset() {
    // initial
    isGameOver = false;

    // reset each p1 and p2 elements
    for (let p of [p1, p2]) {
        // set score to 0
        p.score = 0;

        // set display to 0
        p.display.textContent = 0;

        // remove style classes
        p.display.classList.remove('has-text-success', 'has-text-danger');

        // enable buttons
        p.button.disabled = false;
    }
}