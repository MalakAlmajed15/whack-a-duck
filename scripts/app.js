function init(){
    const gridElm = document.querySelector('.grid')
    const cells = []
    const gridWidth = 10 //in one line
    const numberOfCells = gridWidth * gridWidth //10*10 == 100 cells
    const scoreElm = document.querySelector('#score-display')
    const audioEln = document.querySelector('#quack')
    
    let duckPosition = 4 //assigning a position for the duck
    let score = 0
    let totalDucks = 0

    function addDuck(){
        cells[duckPosition].classList.add('duck')//adding the class 'duck' to the position(index, not the actual cell)
        totalDucks++
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')//to remove the duck at a given index
    }

    function endGame() {
        alert('game ended, your score is ' + score)
        score = 0
        scoreElm.textContent = 'Your score is 0' 
        totalDucks = 0
    }

    function placeRandomDuck(){
        removeDuck()
        duckPosition = Math.floor(Math.random()*numberOfCells)
        addDuck()
    }

    function play(){
        setInterval(() => {
            if(totalDucks < 10){
                placeRandomDuck()
            } else {
                endGame()
            }
        },3000)
    }

    function handleClick(event) {
        //console.log('handle click has run!')
        if (event.target.classList.contains('duck')){
            audioEln.pause()
            audioEln.currentTime = 0
            score += 10
            scoreElm.textContent = `Your score is ${score}`
            audioEln.play()
            placeRandomDuck()//when the duck is clicked it is placed in random place directly
            console.log(score)
        }
    }

    function createGrid(){
        //for every cell that we require create a div 
        //append this cell to our grid
        for(let i=0; i<numberOfCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i//write a number on each sell
            cell.addEventListener('click', handleClick)
            cells.push(cell)
            gridElm.appendChild(cell)
        }
        console.log(cells)
    }

    createGrid()
    // play()
}

document.addEventListener('DOMContentLoaded', init)