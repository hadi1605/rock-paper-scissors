function getComputerChoice()
{
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1)
    {
        return "Rock";
    }
    else if (choice === 2)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function playerSelection()
{
   let playerChoice = prompt("Rock? Paper? Scissors?");
   playerChoice = playerChoice.toUpperCase();
   if (playerChoice === "ROCK")
   {
    return "Rock";
   }
   else if (playerChoice === "PAPER")
   {
    return "Paper";
   }
   else if (playerChoice === "SCISSORS")
   {
    return "Scissors";
   }
   else
   {
    return;
   }
}

function playRound(Computer, Player)
{
    let compChoice = Computer();
    let playChoice = Player();

    if (compChoice === "Rock" && playChoice === "Rock" || compChoice === "Paper" && playChoice === "Paper" || compChoice === "Scissors" && playChoice === "Scissors")
    {
        return "Tie";
    }
    
    if (compChoice === "Rock" && playChoice === "Scissors" || compChoice === "Paper" && playChoice === "Rock" || compChoice === "Scissors" && playChoice === "Paper")
    {
        return "You lost!";
    }

    if (playChoice === "Rock" && compChoice === "Scissors" || playChoice === "Paper" && compChoice === "Rock" || playChoice === "Scissors" && compChoice === "Paper")
    {
        return "You won!";
    }
}

function game()
{
    let compScore = 0;
    let playScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let result = playRound(getComputerChoice, playerSelection);

        if (result === "You lost!")
        {
            compScore++;
            console.log("You lost!");
        }
        else if (result === "You won!")
        {
            playScore++;
            console.log("You won!");
        }
    }

    if (compScore > playScore)
    {
        console.log("You lost the game!");
    }
    else
    {
        console.log("You won the game!");
    }
}

game();