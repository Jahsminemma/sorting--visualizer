document.addEventListener('DOMContentLoaded', function() {
    renderArray()
    startAlgorithm()
})

function renderArray()
{
    const myArray = randomize(10)

    const arrayNode = document.querySelector('.array')
    for(const number of myArray)
    {
        const node = document.createElement('div')
        node.className = 'cell'
        node.innerText = number
        arrayNode.appendChild(node)
    }
}

async function startAlgorithm()
{
    const cells = document.querySelectorAll('.cell')
    const indexes = new Array()
    let i = 0, len = cells.length

    const interval = setInterval(function() {
        // Base Case
        if(i == len) 
        {
            printIndexes(indexes)
            return clearInterval(interval)
        }
        updateNode(cells, i, indexes)
        i = i + 1

    }, 1500)
}

function updateNode(cells ,i, indexes)
{
    const current_Cell = cells.item(i)
    current_Cell.setAttribute('class', `cell current`)

    window.setTimeout(function() {
        if(Number(cells.item(i).innerHTML) == 32) 
        {
            indexes.push(i)
            current_Cell.setAttribute('class', `cell done`)
        }
        else 
        {
            current_Cell.setAttribute('class', `cell visited`)
        }
    }, 1200)
}

function printIndexes(indexes)
{
    const idx = document.querySelector('.indexes')
    if(indexes.length == 0)
    {
        idx.innerHTML = `<div> Element not found </div>`
    }
    else
    {
        idx.innerHTML = `Element Found at index(s) : `
        for(let i = 0 ; i < indexes.length ; i++)
        {
            if(i != indexes.length - 1) {
                idx.innerHTML += `<div> ${indexes[i]} </div> , `
            }
            else { 
                idx.innerHTML += `<div> ${indexes[i]} </div>`
            }
        }
    }
    return
}