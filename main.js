const Hangman = function(word, guesses) {
    this.word = word.toLowerCase().split('')//Split rozdziela stringa przy każdym znaku podanym w argumencie(w tym wypadku '' czyli każda litera będzie osobnym elementem w tablicy word) 
    this.guesses = guesses
    this.guessedLetters = ['o', 'd', 'e']
}
/*Poniższa metoda zwraca słowo-zagadkę. Funkcja iteruje przez całe słowo, jeśli w gussedLetters zawarta jest podana przez użytkownika litera,
to zwracana jest ona jako widoczna, jeśli podanej litery nie ma w gussedLetters zwracana jest '*'. Widoczne są również spacje (|| letter === ' ')*/
Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)//Spawrdza, czy litera podana przez użytkownika znajduje się w tablicy guessedLetters
    const isGoodGuess = this.word.includes(guess)//Sprawdza, czy podana przez użytkownika litera znajduje się w słowie-zagadce

    if(isUnique) {
        this.guessedLetters.push(guess)
    }//Jeśli podanej przez użytkwonika litery nie ma jeszcze guessedLetters, to będzie ona dodana do tej tablicy

    if(!isGoodGuess) {
        this.guesses--
    }//Jeśli podana przez użytkownika litera nie znajduje się w słowie-zagadce, to guesses zostaje pomniejszone o 1
}

window.addEventListener('keypress', (e) => {

})



