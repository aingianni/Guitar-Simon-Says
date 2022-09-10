const guitarNoteBtns = document.querySelectorAll('.notes');
const compChoiceBtn = document.getElementById('comp-choice-btn');
const submitBtn = document.getElementById('submit');
const playerHealth = document.getElementById('player-health');
const compHealth = document.getElementById('comp-health');

const guitarNotesLayout = [
    ['E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5'],
    ['B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'],
    ['G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4'],
    ['D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4'],
    ['A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3'],
    ['E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3']
];

guitarNoteBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const audio = new Audio(`guitar-notes/${evt.target.id}.mp3`);
        audio.play();
        playerChoice = evt.target.id;
    });
});

// Gloabal variables for compare.
let playerChoice = null;
let compChoice = null;
let playerTurn = false;

// Create two basic objects, one for player and one for computer.

const computer = {
    health: 100,
}

const player = {
    health: 100,
}

// Need render function to update the page.

const render = () => {
    playerHealth.style.background = `linear-gradient(90deg, rgba(0,196,255,1) 0%, rgba(100,0,255,1) ${player.health}%, rgba(0,0,60,1) ${player.health}%)`;
    playerHealth.innerText = `${player.health}%`;
    compHealth.style.background = `linear-gradient(90deg, rgba(255,164,0,1) 0%, rgba(255,0,0,1) ${computer.health}%, rgba(60,0,0,1) ${computer.health}%)`;
    compHealth.innerText = `${computer.health}%`;

    if (computer.health === 0) {

    } else if (player.health === 0) {

    }
}

// Function for comp to choose a note.

const computerTurn = () => {
    if (!playerTurn) {
        let randomString = Math.floor(Math.random() * 6);
        let randomNote = Math.floor(Math.random() * 13);
        compChoice = guitarNotesLayout[randomString][randomNote];
        playerTurn = true;
    }
}

setInterval(computerTurn, 1000);

compChoiceBtn.addEventListener('click', () => {
    const audio = new Audio(`guitar-notes/${compChoice}.mp3`);
    audio.play();
});

// Sumbit button, will be the compare function. This is how we will determine the winner of the round.

const compareChoices = () => {
    if (compChoice === playerChoice) {
        computer.health -= 10;
    } else {
        player.health -= 10;
    }
    playerTurn = false;
}

submitBtn.addEventListener('click', (evt) => {
    compareChoices();
    render();
})