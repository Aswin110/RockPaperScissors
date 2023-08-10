const rock_div=document.getElementById('Rock');
const paper_div=document.getElementById('Paper');
const scissors_div=document.getElementById('Scissors');
const userScore=document.getElementById('playerScore');
const compScore=document.getElementById('computerScore');
const result=document.querySelector('.result > p');

let r='rock';
let p='paper';
let s='scissors';

const myArray=[
    'rock',
    'paper',
    'scissors'
];

function computerPlay(){
    return myArray[~~(Math.random()*myArray.length)] 
}

let computerScore =0;
let playerScore= 0;
let playerSelection;
let computerSelection;

function game(playerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerPlay().toLowerCase();
    
    if(playerSelection==computerSelection){
        result.innerHTML=`tie game`
        // 'tie game\n computer score: '+ computerScore + '\n player score: '+playerScore;
    }else if((computerSelection=='rock'&&playerSelection=='scissors')||
            (computerSelection=='scissors'&&playerSelection=='paper')|| 
            (computerSelection=='paper'&&playerSelection=='rock'))
        {
            result.innerHTML=`You lose ${computerSelection} Beats ${playerSelection}`
            compScore.innerHTML=++computerScore;
            userScore.innerHTML=playerScore;
        }else{
            result.innerHTML=`you win! ${playerSelection} beats ${computerSelection}`
            compScore.innerHTML=computerScore;
            userScore.innerHTML=++playerScore;
        }
    }

    /*function declareResult(){
     if (playerScore===computerScore){
            alert (playerScore+' - '+computerScore+'\n tie game')
         return playerScore + ' - ' + computerScore + '\n Tie game!';

        }
        else if(playerScore>computerScore){
            alert (playerScore+' - '+computerScore+'\n You won')
            return playerScore + ' - ' + computerScore + '\n You win!!';
        }else
        {
            alert (playerScore + ' - ' + computerScore+'\n You lose. Better luck next time.')
            return playerScore + ' - ' + computerScore + '\n You lost. Better luck next time!';
        }
    }
}
function userInput(){
    playerSelection = prompt('Enter rock, paper or scissors','');
    if((playerSelection.toLowerCase()=='rock')||
        (playerSelection.toLowerCase()=='paper')||
        (playerSelection.toLowerCase()=='scissors'))
    {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }else
    {
        alert('invalid choice please enter again');
        userInput();
    }
}*/

     rock_div.addEventListener('click',function(){
        game(r);
        console.log('hi')
    });

    paper_div.addEventListener('click',function(){
        game(p);
    });

    scissors_div.addEventListener('click',function(){
        game(s);
    });

