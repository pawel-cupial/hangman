const word1 = new Hangman('kotek', 3)

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

const request = new XMLHttpRequest 

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
    /*Ready state ma 5 wartości: 0 - UNSENT, 1 - OPENED, 2- HEADERS RECIVED, 3 - LOADING, 4 -DONE
    Chchemy coś zrobić z danymi, które zostały pobrane z requesta stąd readyState === 4*/
        const data = JSON.parse(e.target.responseText)//Losowa zagadka, którą chcemy uzyskać zapisana jest w właściwości responseText w formacie JSON
        console.log(data)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

