const img1 = document.getElementById('dice1');
const img2 = document.getElementById('dice2');
const Roll_btn = document.getElementById('btn_roll');
const newGame_btn = document.getElementById('btn_newGame');
const Hold_btn = document.getElementById('btn_hold');
const p_score1 = document.getElementById('score1');
const p_score2 = document.getElementById('score2');
const sec1 = document.getElementById('player1_p');
const sec2 = document.getElementById('player2_p');
const player1_sec = document.getElementById('player1');
const player2_sec = document.getElementById('player2');
const p_currentScore1 = document.getElementById('current_score1');
const p_currentScore2 = document.getElementById('current_score2');

let player1RoundScore = 0;
let player2RoundScore = 0;
let player1GlobalScore = 0;
let player2GlobalScore = 0;
let currentPlayer = 1;
let winningScore = parseInt(localStorage.getItem('winningScore'));
console.log(winningScore);

function updateScores() {
    p_score1.textContent = player1GlobalScore;
    p_score2.textContent = player2GlobalScore;
}

function updateCurrentScore() {
    p_currentScore1.textContent = player1RoundScore;
    p_currentScore2.textContent = player2RoundScore;
}

function switchPlayer() {
    if (currentPlayer === 1) {
        player1GlobalScore += player1RoundScore;
        player1RoundScore = 0;
        currentPlayer = 2;
    } else {
        player2GlobalScore += player2RoundScore;
        player2RoundScore = 0;
        currentPlayer = 1;
    }
    updateScores();
    updateCurrentScore();
}

function newGame() {
    player1GlobalScore = 0;
    player2GlobalScore = 0;
    player1RoundScore = 0;
    player2RoundScore = 0;
    sec1.innerText = '';
    sec2.innerText = '';
    player1_sec.style.opacity = '100%';
    player2_sec.style.opacity = '100%';
    updateScores();
    updateCurrentScore();
}

function checkForWinner() {
    if (player1GlobalScore >= winningScore) {
        sec1.style.color = '#c21057'
        sec1.innerText = 'you Win!'
        sec2.style.color = '#c21057'
        sec2.innerText = 'you Lost!'
        player2_sec.style.opacity = '70%'

    } else if (player2GlobalScore >= winningScore) {
        sec2.style.color = '#c21057'
        sec2.innerText = 'you Win!'
        sec1.style.color = '#c21057'
        sec1.innerText = 'you Lost!'
        player1_sec.style.opacity = '70%'
    }
}

Roll_btn.addEventListener('click', (e) => {
    if (currentPlayer === 1) {
        let dice1 = Math.floor((Math.random() * 6) + 1);
        let dice2 = Math.floor((Math.random() * 6) + 1);
        img1.src = `dice-${dice1}.png`;
        img2.src = `dice-${dice2}.png`;

        if (dice1 === 6 && dice2 === 6) {
            player1RoundScore = 0;
            switchPlayer();
        } else {
            player1RoundScore += dice1 + dice2;
            updateCurrentScore();
        }
    } else {
        let dice1 = Math.floor((Math.random() * 6) + 1);
        let dice2 = Math.floor((Math.random() * 6) + 1);
        img1.src = `dice-${dice1}.png`;
        img2.src = `dice-${dice2}.png`;

        if (dice1 === 6 && dice2 === 6) {
            player2RoundScore = 0;
            switchPlayer();
        } else {
            player2RoundScore += dice1 + dice2;
            updateCurrentScore();
        }
    }
    updateScores();
    checkForWinner();
});

Hold_btn.addEventListener('click', () => {
    switchPlayer();
    checkForWinner();
});

newGame_btn.addEventListener('click', () => {
    newGame();
});
