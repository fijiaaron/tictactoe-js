function initTicTacToe()
{
    console.log("init")
    var self = this;

    var buttons = document.querySelectorAll('.tic-tac-toe .board .square button')

    this.player = 'o'
    this.markers = {o: '⭕', x: '❌'}
    this.moves = []
    this.won = false

    buttons.forEach(button => { 
        console.log("button", button)
        button.addEventListener("click", (event) => {
            var button = event.target
            var position = button.id
            var text = button.innerText
            
            var player = this.player
            var marker = this.markers[player]
            var turn = this.moves.length + 1

            console.log(`clicked ${button} at position ${position} and text '${text}' on turn ${turn} by player ${player} with marker ${marker}`)
             
            // check if game has been won
            if (won == true)
            {
                 // TODO: check if game is won
                 console.log("game has been won")
                 return
            }

            // check if game is over
            if (this.moves.length >= 9)
            {
                console.log("game is over")
                return
            }

            // check if square is empty
            if (text != '')
            {
                console.log("this square is not empty")
                return
            }

            // update the display
            button.innerText = marker
           
            // keep track of moves
            this.moves.push({turn: turn, player: player, position: position})
            console.log("move: ", this.moves.length, this.moves[turn-1])

            // toggle player 
            this.player = this.player == 'o' ? 'x' : 'o'

            console.log("next turn: " + this.turn)
        })

        window.setTimeout(() => {
            console.log("clearing after init...")
            clearBoard()
        }, 1500)
    })


    var clear = document.querySelector('.tic-tac-toe button[type=reset]')
    var clearBoard = function() 
    {
        console.log("clear board")
        buttons.forEach(button => { 
            console.log("button", button)
            console.log(`clear ${button} at position ${button.id} with text ${button.innerText}` )
            button.innerText = ''
            self.moves = []
        })
    }

    clear.addEventListener("click", clearBoard)
    

    var undo = document.querySelector('.tic-tac-toe button.undo')

    var underLastMove = function() {
        console.log("undo previous move")
        if (self.moves.length < 1)
        {
            console.log("no moves recorded")
            return
        }

        var move = self.moves.pop()
        console.log(move)
        var button = document.querySelector("#" + move.position)
        console.log(button)
        button.innerHTML = ''
    }

    undo.addEventListener("click", underLastMove)
}

