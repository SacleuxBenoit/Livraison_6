let player1 = document.getElementById('Joueur1');
let player2 = document.getElementById('Joueur2');
let resetButton = document.getElementById("reset");
let p1Result = document.getElementById("p1Result");
let p2Result = document.getElementById("p2Result");
let p1Score = 0;
let p2Score = 0;
let scoreToWin = 5;
let scoreToWinResult = document.querySelector("p");
let endGame = false;

function addScoreAfterClickP1() {
    if (!endGame) {
        p1Score++;
        if (p1Score === scoreToWin) {
            p1Result.classList.add("winner");
            endGame = true;
        }
    }
    p1Result.textContent = p1Score;
}

function addScoreAfterClickP2() {
    if (!endGame) {
        p2Score++;
        if (p2Score === scoreToWin) {
            p2Result.classList.add("winner");
            endGame = true;
        }
    }
    p2Result.textContent = p2Score;
}
player1.addEventListener("click", addScoreAfterClickP1);
player2.addEventListener("click", addScoreAfterClickP2);

resetButton.addEventListener("click", reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Result.textContent = 0;
    p2Result.textContent = 0;
    p1Result.classList.remove("winner");
    p2Result.classList.remove("winner");
    endGame = false;
}