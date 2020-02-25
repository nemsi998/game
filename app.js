/* 
Game rules:

-The game has 2 players, playing in rounds
- In each turn, a player rolls a dice many times as he wants. 
Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost.
After that it's next player's turn. 
- The player can choose to 'hold', which means that his ROUND
score gets added to his GLOBAL score. After that, it's next
players's turn.
- The fisrt player to reach 100 points on GLOBAL score wins.
*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;




//print the score of the dice to active player
//document.querySelector('#current-' + activePlayer).textContent = dice;

document.getElementById('score-0').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-1').textContent= '0';


//hide the dice when we open the game
document.querySelector('.dice').style.display = 'none';

//display the dice when we click roll the dice

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1 random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2 display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3 update the round score IF the rolled number was NOT a 1 
    if (dice !== 1) {
        //add score
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
    } else{
        //next player
     nextPlayer();
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    //update CURRENT scorre to GLOBAL
    scores[activePlayer] += roundScore;
    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if win
    if (scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
 
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display= 'none';
}

document.querySelector('.btn-new').addEventListener('click', function(){
    //reset the scores 
    document.getElementById('score-0').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
})

