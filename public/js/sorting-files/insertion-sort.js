let LOCK = false

function renderArray()
{
    if(LOCK) 
    {
        return
    }
    document.querySelector('.array').innerHTML = ''

    const arrayLength = document.querySelector('.generator > input').value
    const myArray = randomize(arrayLength)
    // Base Case
    if(arrayLength > 200)
    {
        alert(`Length of array must be less than 200`)
        return
    }

    const arrayNode = document.querySelector('.array')
    for(const element of myArray)
    {
        const node = document.createElement('div')
        node.className = 'cell'
        node.setAttribute('value', String(element))
        node.style.height = `${3.5*element}px`
        arrayNode.appendChild(node)
    }
}

async function startAlgorithm()
{
    if(LOCK) 
    {
        return
    }
    let cells = document.querySelectorAll('.cell')
    let arrayLength = cells.length
    // Base Case
    if(arrayLength == 0)
    {
        alert(`Lenght of Array can't be ${arrayLength}`)
        return
    }

    const slider = document.querySelector('.slider')
    slider.disabled = LOCK = true
    const intervalTime = slider.value

    for(let i = 0 ; i < arrayLength - 1 ; i++)
    {
        let j = i
        while(j >= 0 && Number(cells[j].getAttribute('value')) > Number(cells[j+1].getAttribute('value')))
        {
            await updateCells(cells, j, j+1, intervalTime)
            j = j - 1
        }
    }

    for(let i = 0 ; i < arrayLength ; i++)
    {
        cells[i].setAttribute('class', `cell done`)
    }
    slider.disabled = LOCK = false
}

async function updateCells(cells, firstIndex, secondIndex, intervalTime)
{
    return new Promise(function(resolve) {

        cells[firstIndex].setAttribute('class', `cell current`)
        cells[secondIndex].setAttribute('class', `cell current`)

        setTimeout(function()
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

            resolve()

        }, intervalTime)
    })
}