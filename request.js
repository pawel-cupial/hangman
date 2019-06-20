const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

