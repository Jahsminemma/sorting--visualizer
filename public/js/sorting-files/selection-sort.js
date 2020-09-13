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

    for(let i = 0 ; i < arrayLength ; i++)
    {
        let minIndex = i;
        for(let j = i + 1 ; j < arrayLength ; j++)
        {
            await updateMinIndex(cells, minIndex, intervalTime);
            await updateCurrentIndex(cells, j, intervalTime);

            const currValue = Number(cells[j].getAttribute('value'));
            const minValue = Number(cells[minIndex].getAttribute('value'));

            if(currValue < minValue)
            {
                await updateMinIndex(cells, j, intervalTime);
                await updateNormalIndex(cells, minIndex ,intervalTime);
                minIndex = j;
            }
            else
            {
                await updateNormalIndex(cells, j, intervalTime);
            }
        }
        await updateCells(cells, minIndex, i, intervalTime);
    }

    slider.disabled = LOCK = false
}

async function updateMinIndex(cells, index, intervalTime)
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            cells[index].setAttribute('class', 'cell min')
            resolve()
        }, intervalTime/3)
    })
}

async function updateCurrentIndex(cells, index, intervalTime)
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            cells[index].setAttribute('class', `cell current`)
            resolve()
        }, intervalTime/3)
    })
}

async function updateNormalIndex(cells, index, intervalTime)
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            cells[index].setAttribute('class', `cell`)
            resolve()
        }, intervalTime/3)
    })
}

async function updateCells(cells, firstIndex, secondIndex, intervalTime)
{
    cells[firstIndex].setAttribute('class', `cell visited`)
    cells[secondIndex].setAttribute('class', `cell visited`)

    return new Promise(function(resolve) 
    {
        setTimeout(function()
        {
            const firstValue = cells[firstIndex].getAttribute('value')
            const secondValue = cells[secondIndex].getAttribute('value')

            cells[secondIndex].setAttribute('value', firstValue)
            cells[firstIndex].setAttribute('value', secondValue)

            cells[secondIndex].style.height = `${3.5*firstValue}px`
            cells[firstIndex].style.height = `${3.5*secondValue}px`

            cells[firstIndex].setAttribute('class', `cell`)
            cells[secondIndex].setAttribute('class', `cell done`)

            resolve()

        }, intervalTime)
    })
}