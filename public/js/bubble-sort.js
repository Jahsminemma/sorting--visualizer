let lock = false
let interval_Time, time_Out

function renderArray()
{
    if(lock) {
        return
    }
    document.querySelector('.array').innerHTML = ''

    const len = document.querySelector('.generator > input').value
    const myArray = randomize(len) // In random-array-generator.js
    // Base Case
    if(len > 500)
    {
        alert(`Length of array must be less than 500`)
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

// Bubble sort algorithm working
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
    if(lock) {
        return
    }
    else {
        slider.disabled = lock = true
        interval_Time = slider.value
        time_Out = Math.floor((4/5)*interval_Time)
    }

    let counter_One = 0, counter_Two = counter_One + 1
    let len = cells.length

    const interval = setInterval(function() {

        if(len == 1)
        {   
            cells[len].setAttribute('class', `cell done`)
            cells[len-1].setAttribute('class', `cell done`)
            slider.disabled = lock = false
            return clearInterval(interval)
        }
        if(counter_One == len - 1)
        {
            cells[counter_One].setAttribute('class', `cell done`)
            counter_One = 0
            counter_Two = counter_One + 1
            len = len - 1
        }
        updateCells(cells, counter_One, counter_Two)
        counter_One = counter_One + 1
        counter_Two = counter_Two + 1

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