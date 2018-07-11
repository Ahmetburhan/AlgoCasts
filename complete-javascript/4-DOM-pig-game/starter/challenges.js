/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice;


document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
        //1.random number
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        //2.display image or dice
        // let diceDom = document.querySelector(".dice");
        document.getElementById('dice-1').style.display = "block";
        document.getElementById('dice-2').style.display = "block";
        // diceDom.style.display = "block";
        document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
        document.getElementById('dice-2').src = "dice-" + dice2 + ".png";


        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        // //update the round score if the rolled number was not 1
        // if (dice === 6 && lastDice === 6) {
        //     //players loses score
        //     scores[activePlayer] = 0;
        //     document.querySelector("#current-" + activePlayer).textContent = "0";
        //     nextPlayer();
        // }
        // else if (dice !== 1) {
        //     //add score
        //     roundScore += dice;
        //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
        // } else {
        //     nextPlayer();
        // } lastDice = dice;
    }

})



document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector(".final-score").value;
        let winningScore;
        if(input) {
            winningScore = input;
        }else {
            winningScore = 100;
        }
        // Check if player won the game
            if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = "none";
            document.getElementById('dice-2').style.display = "none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";


    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";

}


function init () {
    gamePlaying = true;

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice)
    document.querySelector("#score-" + activePlayer).textContent = dice;

    // document.querySelector("#score-" + activePlayer).innerHTML = "<em>" + dice + "</em>";


    var x = document.querySelector("#score-0").textContent;
    console.log(x);

    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";


    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active')
}

document.querySelector(".btn-new").addEventListener("click", init);











