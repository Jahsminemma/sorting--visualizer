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

    await mergeSort(0, cells.length - 1, intervalTime);
    
    for(let i = 0 ; i < cells.length ; i++)
    {
        cells[i].setAttribute('class', `cell done`);
    }
    
    slider.disabled = LOCK = false
}

async function mergeSort(start, end, intervalTime)
{
    if(start < end)
    {
        let mid = start + Math.floor((end - start)/2)
        await mergeSort(start, mid, intervalTime);
        await mergeSort(mid + 1, end, intervalTime);
        await merge(start, mid, end, intervalTime);
    }
}

async function merge(start, mid, end, intervalTime)
{
    let cells = document.querySelectorAll('.cell')
    let i = start, j = mid + 1;
    let t = [];
    
    while(i <= mid && j <= end)
    {
        let firstValue = Number(cells[i].getAttribute('value'))
        let secondValue = Number(cells[j].getAttribute('value'))

        if(firstValue <= secondValue) 
        {
            t.push(cells[i++].getAttribute('value'));
        }
        else 
        {
            t.push(cells[j++].getAttribute('value'));
        }
    }
    while(i <= mid) 
    {
        t.push(cells[i++].getAttribute('value'));
    }
    while(j <= end) 
    {
        t.push(cells[j++].getAttribute('value'));
    }

    for(let i = start ; i <= end ; i++)
    {
        cells[i].setAttribute('class', `cell visited`);
    }
    await sleep(intervalTime/3);

    for(let x = start, y = 0 ; x <= end && y < t.length ; x++, y++)
    {
        await update(cells, x, t[y], intervalTime/3);
    }

    await sleep(intervalTime/4);
    for(let i = start ; i <= end ; i++)
    {
        cells[i].setAttribute('class', `cell`);
    }
}

async function update(cells, x, value, intervalTime)
{
    return await new Promise(function(resolve) {
        setTimeout(function()
        {
            cells[x].style.height = `${3.5*value}px`;
            cells[x].setAttribute('value', value);
            
            resolve();
        }, intervalTime)
    })
}

async function sleep(intervalTime)
{
    return await new Promise(function(resolve) {
        setTimeout(function()
        {
            resolve();
        }, intervalTime)
    })
}