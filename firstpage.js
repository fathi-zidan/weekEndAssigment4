const btn = document.getElementById('startGame');
const input = document.getElementById('winningScore');
function start() {
    const winningScore = parseInt(input.value);
    window.location.href = `DiceGame.html`;
    localStorage.setItem('winningScore', winningScore);
}
btn.addEventListener("click", start);