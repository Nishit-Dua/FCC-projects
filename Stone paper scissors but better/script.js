let choises = ['rock', 'paper', 'scissors'];
let compScore = 0, playerScore = 0, tieScore = 0;

function computerPlay(choises) {
    return choises[Math.floor(3 * Math.random())]
}


function playRound(comp, play) {
    play = play.toLowerCase()
    if (((comp == 'rock') && (play == 'paper')) ||
        ((comp == 'paper') && (play == 'scissors')) ||
        ((comp == 'scissors') && (play == 'rock'))) {
        playerScore++;
        return 'You Won <3'
    }

    else if (((comp == 'paper') && (play == 'rock')) ||
        ((comp == 'rock') && (play == 'scissors')) ||
        ((comp == 'scissors') && (play == 'paper'))) {
        compScore++;
        return 'You Lost To Computer :('
    }

    else {
        tieScore++;
        return "It's a Tie"
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', function (button) {
        let player = this.dataset.val;
        let comp = computerPlay(choises)
        const display = document.querySelector('#winner')
        const score = document.querySelector('#score')
        const choise_ = document.querySelector('#choise')
        display.innerHTML = playRound(comp, player)
        choise_.innerHTML = `You choose ${player} and the computer choose ${comp}`
        score.innerHTML = `Current score => Comp: ${compScore}, player: ${playerScore}, ties: ${tieScore}`
    });
});