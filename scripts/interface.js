document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {

    let square = event.target
    let position = square.id

    if (handleMove(position)) {

        setTimeout(() => {

            let winner = (playerTime == 0) ? "🛡️" : "⚔️"

            alert(" O Jogo Acabou - O Vencedor foi " + winner)

        }, 10)

            let addbutton = document.getElementById('addButton')
            addbutton.innerHTML = `<button id="button" onclick='newGame()'>Jogar Novamente</button>`

    }    
    updateSquares(position)

}

function updateSquares(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`

}

function newGame() {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {

        board = ['', '', '', '', '', '', '', '', '']
        playerTime = 0
        gameOver = false

        square.innerHTML = ''

        let addbutton = document.getElementById('addButton')
        addbutton.innerHTML = ''
    })
}