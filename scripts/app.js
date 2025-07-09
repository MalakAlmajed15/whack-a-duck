function init(){
    const gridElm = document.querySelector('.grid')
    const cells = []
    const gridWidth = 10 //in one line
    const numberOfCells = gridWidth * gridWidth //10*10 == 100 cells
    let duckPosition = 4 //assigning a position for the duck
    let score = 0
    const scoreElm = document.querySelector('#score-display')

    function addDuck(){
        cells[duckPosition].classList.add('duck')//adding the class 'duck' to the position(index, not the actual cell)
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')//to remove the duck at a given index
    }

    function play(){
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random()*numberOfCells)
            addDuck()
        },3000)

    }

    function handleClick(event) {
        //console.log('handle click has run!')
        if (event.target.classList.contains('duck')){
            score += 10
            scoreElm.textContent = `Your score is ' ${score}`
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
    play()
}

document.addEventListener('DOMContentLoaded', init)