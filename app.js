const puzzlePar = document.querySelector('#puzzle')
const guessesPar = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {//Event odpalany jest przy każdym naciśnięciu klawisza w oknie przeglądarki
    const guess = String.fromCharCode(e.charCode)//Zamienia kod nacisniętego klawisza na jego faktyczną wartość
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzlePar.textContent = game.puzzle
    guessesPar.textContent = game.statusMessage
}

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', (e) => {
    startGame()
})

startGame()