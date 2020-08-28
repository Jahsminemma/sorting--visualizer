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
    // Base Case
    if(len > 500)
    {
        alert(`Length of array must be less than 500`)
        return
    }
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
    const cells = document.querySelectorAll('.cell')
    //Base Case
    if(cells.length == 0)
    {
        alert(`Lenght of Array can't be ${cells.length}`)
        return
    }

    const slider = document.querySelector('.slider')
    if(lock == true) {
        return
    }
    else {
        slider.disabled = lock = true
        interval_Time = slider.value
        time_Out = Math.floor((4/5)*interval_Time)
    }

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