let LOCK = false
let interval_Time, time_Out

function renderArray()
{
    if(LOCK) {
        return
    }
    document.querySelector('.array').innerHTML = ''

    const len = document.querySelector('.generator > input').value
    const myArray = randomize(len)
    // Base Case
    if(len > 250)
    {
        alert(`Length of array must be less than 250`)
        return
    }

    const arrayNode = document.querySelector('.array')
    for(const number of myArray)
    {
        const node = document.createElement('div')
        node.className = 'cell'
        node.setAttribute('value', String(number))
        node.style.height = `${3.5*number}px`
        arrayNode.appendChild(node)
    }
}

function startAlgorithm()
{
    let cells = document.querySelectorAll('.cell')
    // Base Case
    if(cells.length == 0) 
    {
        alert(`Lenght of Array can't be ${cells.length}`)
        return
    }

    const slider = document.querySelector('.slider')
    if(LOCK) {
        return
    }
    else {
        slider.disabled = LOCK = true
        interval_Time = slider.value
        time_Out = Math.floor((4/5)*interval_Time)
    }

    let len = cells.length
    let startIndex = 0, pointer = 0

    const interval = setInterval(function() {

        if(pointer < 0 || Number(cells[pointer].getAttribute('value')) < Number(cells[pointer+1].getAttribute('value')))
        {
            startIndex += 1
            pointer = startIndex - 1
        }
        // Base condition
        if(startIndex == len)
        {   
            for(const cell of cells) 
            {
                cell.setAttribute('class', `cell done`)
            }
            slider.disabled = lock = false
            return clearInterval(interval)
        }
        updateCells(cells, pointer, pointer + 1)
        pointer = pointer - 1

    }, interval_Time)
}

function updateCells(cells, firstIndex, secondIndex)
{
    cells[firstIndex].setAttribute('class', `cell current`)
    cells[secondIndex].setAttribute('class', `cell current`)

    window.setTimeout(function() 
    {
        let firstValue = cells[firstIndex].getAttribute('value')
        let secondValue = cells[secondIndex].getAttribute('value')
        
        if(parseInt(firstValue) > parseInt(secondValue))
        {
            cells[secondIndex].setAttribute('value', firstValue)
            cells[firstIndex].setAttribute('value', secondValue)

            cells[secondIndex].style.height = `${3.5*firstValue}px`
            cells[firstIndex].style.height = `${3.5*secondValue}px`
        }

        cells[firstIndex].setAttribute('class', `cell`)
        cells[secondIndex].setAttribute('class', `cell`)
        
    }, time_Out)
}