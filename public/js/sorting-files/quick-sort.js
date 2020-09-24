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

    await quickSort(0, cells.length - 1, intervalTime);
    
    for(let i = 0 ; i < cells.length ; i++)
    {
        cells[i].setAttribute('class', `cell done`);
    }
    
    slider.disabled = LOCK = false
}

async function quickSort(start, end, intervalTime)
{
    if(start < end)
    {
        let point = await partition(start, end, intervalTime);
        await quickSort(start, point - 1, intervalTime);
        await quickSort(point + 1, end, intervalTime);
    }
}

async function partition(start, end, intervalTime)
{
    let cells = document.querySelectorAll('.cell');
    let pivot = cells[end].getAttribute('value');
    let smallerIndex = start - 1;

    await markPivot(cells, end, 'cell min');

    for(let index = start ; index < end ; index++)
    {
        await current(cells, index, 'cell visited', intervalTime);

        let curr = cells[index].getAttribute('value');
        if(Number(curr) < Number(pivot))
        {
            smallerIndex += 1;
            await current(cells, smallerIndex, 'cell visited', intervalTime);
            await swap(cells, index, smallerIndex, intervalTime);
            await current(cells, smallerIndex, 'cell', intervalTime);
        }
        await current(cells, index, 'cell', intervalTime);
    }
    await swap(cells, smallerIndex + 1, end, intervalTime);
    await markPivot(cells, end, 'cell');

    return smallerIndex + 1;
}

async function swap(cells, index1, index2, intervalTime)
{
    return await new Promise(function(resolve) {
        setTimeout(() => {

            let firstVal = Number(cells[index1].getAttribute('value'));
            let secondVal = Number(cells[index2].getAttribute('value'));

            cells[index2].setAttribute('value', firstVal);
            cells[index1].setAttribute('value', secondVal);

            cells[index2].style.height = `${3.5*firstVal}px`;
            cells[index1].style.height = `${3.5*secondVal}px`;

            resolve();
        }, intervalTime/1.2);
    });
}

async function markPivot(cells, index, css_class, intervalTime)
{
    return await new Promise(function(resolve) {
        setTimeout(() => {
            cells[index].setAttribute('class', String(css_class));
            
            resolve();
        }, intervalTime/2);
    });
}

async function current(cells, index, css_class, intervalTime)
{
    return await new Promise(function(resolve) {
        setTimeout(() => {
            cells[index].setAttribute('class', String(css_class));

            resolve();
        }, intervalTime/2);
    });
}