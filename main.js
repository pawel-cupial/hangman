const Hangman = function(word, guesses) {
    this.word = word.toLowerCase().split('')//Split rozdziela stringa przy każdym znaku podanym w argumencie(w tym wypadku '' czyli każda litera będzie osobnym elementem w tablicy word) 
    this.guesses = guesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.setStatus = function() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    /*Funkcja every() iteruje przez całe słowo, callback zwraca true jeśli wszystkie elementy spełnily warunek i false jeśli choć jeden nie spełnił warunku.
    W tym wypadku jeśli wszystkie litery ze słowa-zagadki są zawarte w tablicy guessedLetters const finished będzie true*/
    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.setStatusMessage = function() {
    if (this.status === 'playing') {
        return `Guesses left: ${this.guesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was: ${this.word.join('')}`
    } else if (this.status === 'finished') {
        return `Great work! You guessed the word!`
    }
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

    if (this.status !== 'playing') {
        return//Zwraca undefined dzięki czemu jeśłi status jest inny niż playing, to kod niżej nie ruszy i nie będą przyjmowane dalsze guesses
    }

    if(isUnique) {
        this.guessedLetters.push(guess)
    }//Jeśli podanej przez użytkwonika litery nie ma jeszcze guessedLetters, to będzie ona dodana do tej tablicy

    if(!isGoodGuess) {
        this.guesses--
    }//Jeśli podana przez użytkownika litera nie znajduje się w słowie-zagadce, to guesses zostaje pomniejszone o 1
    this.setStatus()
}

