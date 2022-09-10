const guitarNoteBtns = document.querySelectorAll('.notes');

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
        console.log(evt.target.id);
        const audio = new Audio(`guitar-notes/${evt.target.id}.mp3`);
        audio.play();
    });
});

// I have a working guitar. What do I need to create an interactive game based around these notes.
// Create two classes that represent the players health and the computers health.
// A successful note match will result in the computers health going down, wheres a miss will knock down the players health.
// First round the notes are visible on the buttons.
// Second round the notes will dissapear from the innertext of the button.