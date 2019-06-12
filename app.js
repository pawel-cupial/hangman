const word1 = new Hangman('Justynka Pupuszynka ale z niej Kruszynka', 3)

const puzzlePar = document.querySelector('#puzzle')
const guessesPar = document.querySelector('#guesses')

puzzlePar.textContent = word1.puzzle
guessesPar.textContent = word1.statusMessage

window.addEventListener('keypress', (e) => {//Event odpalany jest przy każdym naciśnięciu klawisza w oknie przeglądarki
    const guess = String.fromCharCode(e.charCode)//Zamienia kod nacisniętego klawisza na jego faktyczną wartość
    word1.makeGuess(guess)
    puzzlePar.textContent = word1.puzzle
    guessesPar.textContent = word1.statusMessage
})

