let lock = false
let interval_Time, time_Out

function renderArray()
{
    if(lock) {
        return
    }

    document.querySelector('.array').innerHTML = ''
    document.querySelector('.indexes').innerHTML = ''

    const len = document.querySelector('.generator > input').value
    const myArray = randomize(len)

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
    if(lock == true) {
        return
    }
    lock = true

    const slider = document.querySelector('.slider')
    interval_Time = slider.value
    time_Out = Math.floor((4/5)*interval_Time)
    slider.disabled = true

    const cells = document.querySelectorAll('.cell')
    const value = document.querySelector('.find-element > input').value
    const indexes = new Array()
    let i = 0, len = cells.length

    const interval = setInterval(function() {
        // Base Case
        if(i == len) 
        {
            lock = false
            slider.disabled = false
            printIndexes(indexes)
            return clearInterval(interval)
        }
        updateNode(cells, i, indexes, value)
        i = i + 1

    }, interval_Time)
}

function updateNode(cells ,i, indexes, value)
{
    const current_Cell = cells.item(i)
    current_Cell.setAttribute('class', `cell current`)

    window.setTimeout(function() {
        if(Number(cells.item(i).innerHTML) == value)
        {
            indexes.push(i)
            current_Cell.setAttribute('class', `cell done`)
        }
        else 
        {
            current_Cell.setAttribute('class', `cell visited`)
        }
    }, time_Out)
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
        idx.innerHTML += ` <div> Element Found at index : </div> `
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