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
    let myArray = randomize(len)
    myArray.sort(function(a, b) { return a - b })

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
    const value = parseInt(document.querySelector('.find-element > input').value)

    let si = 0, ei = cells.length - 1

    const interval = setInterval(function() {
        
        if(si > ei) {
            slider.disabled = lock = false
            printIndexes('')
            return clearInterval(interval)
        }

        let mid = si + Math.floor((ei - si)/2)

        if(parseInt(cells.item(mid).innerHTML) == value) 
        {
            cells.item(mid).setAttribute('class', `cell done`)
            slider.disabled = lock = false
            printIndexes(mid)
            return clearInterval(interval)
        }
        if(parseInt(cells.item(mid).innerHTML) > value)
        {
            updateNode(cells, mid, ei, mid)
            ei = mid - 1
        }
        else
        {
            updateNode(cells, si, mid, mid)
            si = mid + 1
        }

    }, interval_Time)
}

function updateNode(cells, start, end, mid)
{
    const current_Cell = cells.item(mid)
    current_Cell.setAttribute('class', `cell current`)

    window.setTimeout(function() 
    {
        for(let i = start ; i <= end ; i++) {
            cells.item(i).setAttribute('class', `cell visited`)
        }    
    }, time_Out)
}

function printIndexes(status)
{
    const idx = document.querySelector('.indexes')
    if(status == '') {
        idx.innerHTML = `<div> Element not found </div>`
    }
    else {
        idx.innerHTML += ` <div> Element Found at index : ${status} </div> `
    }
    return
}