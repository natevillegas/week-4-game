//initialize global vars
var wins = 0;
var losses = 0;
var userScore = 0;
var randNum = Math.floor((Math.random()* 100) + 19);
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);

//updates score, wins, losses continously until page refresh
function updateUserScore(){
  $('#userScore').text(userScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
}

//restarts game with randNum, userScore, and cereal values
function restart(){
  userScore = 0;
  $('#randNum').empty();
  randNum = Math.floor((Math.random()* 100) + 19);
  $('#randNum').append(randNum);
  blue = Math.floor((Math.random()* 12) + 1);
  green = Math.floor((Math.random()* 12) + 1);
  red = Math.floor((Math.random()* 12) + 1);
  yellow = Math.floor((Math.random()* 12) + 1);
  updateUserScore();
}

//win or lose condition with global score update
function updateWinLossKeeper() {
  if (userScore == randNum) {
    wins = wins + 1;
    restart();
  }
  else if (userScore > randNum){
    losses = losses + 1;
    restart();
  }
  else {
    updateUserScore();
  }
}

$('#randNum').append(randNum);
$('#userScore').append(userScore);

$(document).ready(function(){
  $('#red').click(function(){
    userScore = userScore + red;
    updateWinLossKeeper();
  })
  $('#blue').click(function(){
    userScore = userScore + blue;
    updateWinLossKeeper();
  })
  $('#yellow').click(function(){
    userScore = userScore + yellow;
    updateWinLossKeeper();
  })
  $('#green').click(function(){
    userScore = userScore + green;
    updateWinLossKeeper();
  })
});
